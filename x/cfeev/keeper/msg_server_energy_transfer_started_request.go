package keeper

import (
	"context"

	"cfeev/x/cfeev/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) EnergyTransferStartedRequest(goCtx context.Context, msg *types.MsgEnergyTransferStartedRequest) (*types.MsgEnergyTransferStartedRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	energyTransfer, found := k.GetEnergyTransfer(ctx, msg.EnergyTransferId)
	if !found {
		return nil, sdkerrors.Wrap(types.ErrEnergyTransferNotFound, "energy transfer not found")
	}
	energyTransfer.Status = types.TransferStatus_ONGOING

	// update energyTransfer instance in the KVStore
	k.SetEnergyTransfer(ctx, energyTransfer)

	return &types.MsgEnergyTransferStartedRequestResponse{}, nil
}
