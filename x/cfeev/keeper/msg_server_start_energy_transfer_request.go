package keeper

import (
	"context"
	"strconv"

	"cfeev/x/cfeev/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k msgServer) StartEnergyTransferRequest(goCtx context.Context, msg *types.MsgStartEnergyTransferRequest) (*types.MsgStartEnergyTransferRequestResponse, error) {

	ctx := sdk.UnwrapSDKContext(goCtx)

	tariffValue64, err := strconv.ParseFloat(msg.OfferedTariff, 32)
	tariffValue32 := float32(tariffValue64)

	if err != nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request, incorrectly defined tariff")
	}

	var energyTransfer = types.EnergyTransfer{
		OwnerAccountAddress:   msg.OwnerAccountAddress,
		DriverAccountAddress:  msg.Creator,
		EnergyTransferOfferId: msg.EnergyTransferOfferId,
		ChargerId:             msg.ChargerId,
		Status:                types.TransferStatus_REQUESTED,
		OfferedTariff:         tariffValue32,
	}

	// get energy transfer offer object by offer id
	offer, found := k.GetEnergyTransferOffer(ctx, energyTransfer.EnergyTransferOfferId)

	if !found {
		return nil, status.Error(codes.NotFound, "energy transfer offer not found")
	}

	if offer.GetChargerStatus() == types.ChargerStatus_ACTIVE {
		offer.ChargerStatus = types.ChargerStatus_BUSY
	} else {
		return nil, sdkerrors.Wrap(types.ErrBusyCharger, "busy charger")
	}

	// check if the offered tariff has not been changed
	if !(offer.Tariff == energyTransfer.OfferedTariff) {
		return nil, status.Error(codes.InvalidArgument, "wrong tariff")
	}

	// send tokens to the escrow account
	err = k.sendCollateralToEscrowAccount(ctx, energyTransfer.DriverAccountAddress, "1000token")
	if err != nil {
		return nil, status.Error(codes.Aborted, "sending funds to the escrow aborted")
	}
	collateralCoins, err := sdk.ParseCoinsNormalized("1000token")
	collateral := collateralCoins.AmountOf("token")
	energyTransfer.Collateral = collateral.Uint64()

	energyTransferId := k.AppendEnergyTransfer(ctx, energyTransfer)
	_ = energyTransferId

	// update the offer in the store
	k.SetEnergyTransferOffer(ctx, offer)

	// calculate energy amount based on collateral and tariff offer
	energyToTransfer := float32(collateral.Int64()) / energyTransfer.OfferedTariff
	energyTransfer.EnergyToTransfer = energyToTransfer

	k.SetEnergyTransfer(ctx, energyTransfer)

	// send notification event to connector, the event will emitted only if there is no previous errors
	event := &types.EnergyTransferCreatedEvent{
		EnergyTransferId:       energyTransferId,
		ChargerId:              msg.ChargerId,
		EnergyAmountToTransfer: energyToTransfer,
	}
	err = ctx.EventManager().EmitTypedEvent(event)
	if err != nil {
		k.Logger(ctx).Error("new EnergyTransferCreated emit event error", "event", event, "error", err.Error())
	}

	return &types.MsgStartEnergyTransferRequestResponse{}, nil
}

// sends the collateral from the driver's account to a module account
func (k msgServer) sendCollateralToEscrowAccount(ctx sdk.Context, driverAccountAddress string, collateral string) error {
	driver, err := sdk.AccAddressFromBech32(driverAccountAddress)
	if err != nil {
		panic(err)
	}
	collateralCoins, err := sdk.ParseCoinsNormalized(collateral)
	if err != nil {
		panic(err)
	}
	sdkError := k.bankKeeper.SendCoinsFromAccountToModule(ctx, driver, types.ModuleName, collateralCoins)
	if sdkError != nil {
		return sdkError
	}

	return nil
}
