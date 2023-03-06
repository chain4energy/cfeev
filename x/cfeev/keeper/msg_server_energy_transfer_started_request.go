package keeper

import (
	"context"

	"cfeev/x/cfeev/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) EnergyTransferStartedRequest(goCtx context.Context, msg *types.MsgEnergyTransferStartedRequest) (*types.MsgEnergyTransferStartedRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	energyTransfer, found := k.GetEnergyTransfer(ctx, msg.EnergyTransferId)
	if !found {
		// TODO: handle not found
	}
	energyTransfer.Status = types.TransferStatus_ONGOING

	// update energyTransfer instance in the KVStore
	k.SetEnergyTransfer(ctx, energyTransfer)

	// TODO: Handling the response
	return &types.MsgEnergyTransferStartedRequestResponse{}, nil
}
