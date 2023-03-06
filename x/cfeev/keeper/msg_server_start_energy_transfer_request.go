package keeper

import (
	"context"
	"strconv"

	"cfeev/x/cfeev/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) StartEnergyTransferRequest(goCtx context.Context, msg *types.MsgStartEnergyTransferRequest) (*types.MsgStartEnergyTransferRequestResponse, error) {

	ctx := sdk.UnwrapSDKContext(goCtx)

	tariffValue64, err := strconv.ParseFloat(msg.OfferedTariff, 32)
	tariffValue32 := float32(tariffValue64)

	// TODO: add error handling
	if err != nil {

	}

	var energyTransfer = types.EnergyTransfer{
		OwnerAccountAddress:   msg.OwnerAccountAddress,
		DriverAccountAddress:  msg.Creator,
		EnergyTransferOfferId: msg.EnergyTransferOfferId,
		ChargerId:             msg.ChargerId,
		Status:                types.TransferStatus_REQUESTED,
		OfferedTariff:         tariffValue32,
	}

	_ = energyTransfer

	// get energy transfer offer object by offer id
	offer, found := k.GetEnergyTransferOffer(ctx, energyTransfer.EnergyTransferOfferId)

	if !found {
		// TODO: handle not found
	}

	if offer.GetChargerStatus() == types.ChargerStatus_ACTIVE {
		offer.ChargerStatus = types.ChargerStatus_BUSY
	} else {
		// TODO: handle error
	}

	// check if the offered tariff has not been changed
	if !(offer.Tariff == energyTransfer.OfferedTariff) {
		// TODO: handle error
	}

	// send tokens to the escrow account
	err = k.sendCollateralToEscrowAccount(ctx, energyTransfer.DriverAccountAddress, "1000token")
	// TODO: add error handling
	if err != nil {

	}
	energyTransfer.Collateral = "1000token"

	energyTransferId := k.AppendEnergyTransfer(ctx, energyTransfer)
	_ = energyTransferId

	// update offer in the store
	k.SetEnergyTransferOffer(ctx, offer)

	// TODO: calculate energy amount based on collateral and tariff offer

	// send notification event to connector, the event will emitted only if there is no previous errors
	event := &types.EnergyTransferCreatedEvent{
		EnergyTransferId:       energyTransferId,
		ChargerId:              msg.ChargerId,
		EnergyAmountToTransfer: 25.34,
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
