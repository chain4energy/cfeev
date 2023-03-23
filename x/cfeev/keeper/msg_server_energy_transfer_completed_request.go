package keeper

import (
	"context"
	"math"
	"strconv"

	"cfeev/x/cfeev/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) EnergyTransferCompletedRequest(goCtx context.Context, msg *types.MsgEnergyTransferCompletedRequest) (*types.MsgEnergyTransferCompletedRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	energyTransferObj, found := k.GetEnergyTransfer(ctx, msg.EnergyTransferId)
	if !found {
		return nil, sdkerrors.Wrap(types.ErrEnergyTransferNotFound, "energy transfer not found")
	}

	var err error
	usedServiceUnits := msg.GetUsedServiceUnits()

	if energyTransferObj.EnergyToTransfer == usedServiceUnits {
		// send callateral to CP owner's account
		coinsToTransfer := strconv.FormatInt(int64(energyTransferObj.GetCollateral()), 10) + "uc4e"
		err = k.sendCollateralToTargetAccount(ctx, energyTransferObj.OwnerAccountAddress, coinsToTransfer)
		energyTransferObj.Status = types.TransferStatus_PAID
	} else if energyTransferObj.EnergyToTransfer > usedServiceUnits {
		// x := usedServiceUnits32 / energyTransfer.EnergyToTransfer
		// y := float64(x)
		// // round float to 3 decimal places
		// z := math.Floor(y*1000) / 1000
		// tokensSpentInt := int(z * 1000)
		// // used tokens
		// var usedTokens string
		// usedTokens = strconv.Itoa(tokensSpentInt)
		// usedTokens = usedTokens + "token"
		// err = k.sendCollateralToTargetAccount(ctx, energyTransfer.OwnerAccountAddress, usedTokens)
		// energyTransfer.Status = types.TransferStatus_PAID
		// // unused tokens
		// var unusedTokens string
		// unusedTokens = strconv.Itoa(1000 - tokensSpentInt)
		// unusedTokens = unusedTokens + "token"
		// err = k.sendCollateralToTargetAccount(ctx, energyTransfer.DriverAccountAddress, unusedTokens)
	}

	if err != nil {
		return nil, sdkerrors.Wrap(types.ErrCoinTransferFailed, "coin transfer failed")
	}

	// get energy transfer offer object by offer id
	offer, found := k.GetEnergyTransferOffer(ctx, energyTransferObj.EnergyTransferOfferId)
	if !found {
		return nil, sdkerrors.Wrap(types.ErrEnergyTransferOfferNotFound, "energy transfer offer not found")
	}
	offer.ChargerStatus = types.ChargerStatus_ACTIVE

	// update both entities
	k.SetEnergyTransferOffer(ctx, offer)
	k.SetEnergyTransfer(ctx, energyTransferObj)

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
