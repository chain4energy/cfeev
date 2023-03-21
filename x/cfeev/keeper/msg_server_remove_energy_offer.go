package keeper

import (
	"context"

	"cfeev/x/cfeev/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) RemoveEnergyOffer(goCtx context.Context, msg *types.MsgRemoveEnergyOffer) (*types.MsgRemoveEnergyOfferResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	k.RemoveEnergyTransferOffer(ctx, msg.GetId())

	return &types.MsgRemoveEnergyOfferResponse{}, nil
}
