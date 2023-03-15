package keeper

import (
	"context"
	"math"
	"strconv"

	"cfeev/x/cfeev/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k msgServer) EnergyTransferCompletedRequest(goCtx context.Context, msg *types.MsgEnergyTransferCompletedRequest) (*types.MsgEnergyTransferCompletedRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	energyTransfer, found := k.GetEnergyTransfer(ctx, msg.EnergyTransferId)
	if !found {
		return nil, sdkerrors.Wrap(types.ErrEnergyTransferNotFound, "energy transfer not found")
	}

	// used units
	usedServiceUnits64, err := strconv.ParseFloat(msg.UsedServiceUnits, 32)
	usedServiceUnits32 := float32(usedServiceUnits64)
	if err != nil {
		return nil, status.Error(codes.InvalidArgument, "invalid format of used service units")
	}

	if energyTransfer.EnergyToTransfer == usedServiceUnits32 {
		// send callateral to CP owner's account
		err = k.sendCollateralToTargetAccount(ctx, energyTransfer.OwnerAccountAddress, "1000token")
		energyTransfer.Status = types.TransferStatus_PAID
	} else if energyTransfer.EnergyToTransfer > usedServiceUnits32 {
		x := usedServiceUnits32 / energyTransfer.EnergyToTransfer
		y := float64(x)
		// round float to 3 decimal places
		z := math.Floor(y*1000) / 1000
		tokensSpentInt := int(z * 1000)
		// used tokens
		var usedTokens string
		usedTokens = strconv.Itoa(tokensSpentInt)
		usedTokens = usedTokens + "token"
		err = k.sendCollateralToTargetAccount(ctx, energyTransfer.OwnerAccountAddress, usedTokens)
		energyTransfer.Status = types.TransferStatus_PAID
		// unused tokens
		var unusedTokens string
		unusedTokens = strconv.Itoa(1000 - tokensSpentInt)
		unusedTokens = unusedTokens + "token"
		err = k.sendCollateralToTargetAccount(ctx, energyTransfer.DriverAccountAddress, unusedTokens)
	}

	if err != nil {
		return nil, sdkerrors.Wrap(types.ErrCoinTransferFailed, "coin transfer failed")
	}

	// get energy transfer offer object by offer id
	offer, found := k.GetEnergyTransferOffer(ctx, energyTransfer.EnergyTransferOfferId)
	if !found {
		return nil, sdkerrors.Wrap(types.ErrEnergyTransferOfferNotFound, "energy transfer offer not found")
	}
	offer.ChargerStatus = types.ChargerStatus_ACTIVE

	// update both entities
	k.SetEnergyTransferOffer(ctx, offer)
	k.SetEnergyTransfer(ctx, energyTransfer)

	// TODO: Handling the response
	return &types.MsgEnergyTransferCompletedRequestResponse{}, nil
}

func (k msgServer) sendCollateralToTargetAccount(ctx sdk.Context, targetAccountAddress string, collateral string) error {
	target, err := sdk.AccAddressFromBech32(targetAccountAddress)
	if err != nil {
		panic(err)
	}
	collateralCoins, err := sdk.ParseCoinsNormalized(collateral)
	if err != nil {
		panic(err)
	}
	sdkError := k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, target, collateralCoins)

	if sdkError != nil {
		return sdkError
	}

	return nil
}

func compareWithTolerane(a, b float64) bool {
	tolerance := 0.001
	if diff := math.Abs(a - b); diff < tolerance {
		return true
	} else {
		return false
	}
}
