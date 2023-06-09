package keeper

import (
	"context"

	"github.com/chain4energy/cfeev/x/cfeev/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) RemoveTransfer(goCtx context.Context, msg *types.MsgRemoveTransfer) (*types.MsgRemoveTransferResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	transfer, found := k.GetEnergyTransfer(ctx, msg.GetId())
	if !found {
		return nil, sdkerrors.Wrap(types.ErrEnergyTransferCannotBeRemoved, "energy transfer not found")
	}

	if transfer.Status == types.TransferStatus_PAID || transfer.Status == types.TransferStatus_CANCELLED {
		k.RemoveEnergyTransfer(ctx, msg.GetId())
	} else {
		return nil, sdkerrors.Wrap(types.ErrWrongEnergyTransferStatus, "energy transfer status is not PAID or CANCELLED")
	}

	return &types.MsgRemoveTransferResponse{}, nil
}
