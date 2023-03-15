package keeper

import (
	"context"

	"cfeev/x/cfeev/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CancelEnergyTransferRequest(goCtx context.Context, msg *types.MsgCancelEnergyTransferRequest) (*types.MsgCancelEnergyTransferRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	energyTransfer, found := k.GetEnergyTransfer(ctx, msg.EnergyTransferId)
	if !found {
		return nil, sdkerrors.Wrap(types.ErrEnergyTransferNotFound, "energy transfer not found")
	}
	energyTransfer.Status = types.TransferStatus_CANCELLED

	// get energy transfer offer object by offer id
	offer, found := k.GetEnergyTransferOffer(ctx, energyTransfer.EnergyTransferOfferId)
	if !found {
		return nil, sdkerrors.Wrap(types.ErrEnergyTransferOfferNotFound, "energy transfer offer not found")
	}
	offer.ChargerStatus = types.ChargerStatus_ACTIVE

	// send the collateral back to the EV driver's account
	err := k.sendCollateralToTargetAccount(ctx, energyTransfer.DriverAccountAddress, "1000token")
	if err != nil {
		return nil, sdkerrors.Wrap(types.ErrCoinTransferFailed, "coin transfer failed")
	}

	return &types.MsgCancelEnergyTransferRequestResponse{}, nil
}
