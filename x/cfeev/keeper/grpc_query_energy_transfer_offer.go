package keeper

import (
	"context"

	"github.com/chain4energy/cfeev/x/cfeev/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) EnergyTransferOfferAll(c context.Context, req *types.QueryAllEnergyTransferOfferRequest) (*types.QueryAllEnergyTransferOfferResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var energyTransferOffers []types.EnergyTransferOffer
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	energyTransferOfferStore := prefix.NewStore(store, types.KeyPrefix(types.EnergyTransferOfferKey))

	pageRes, err := query.Paginate(energyTransferOfferStore, req.Pagination, func(key []byte, value []byte) error {
		var energyTransferOffer types.EnergyTransferOffer
		if err := k.cdc.Unmarshal(value, &energyTransferOffer); err != nil {
			return err
		}

		energyTransferOffers = append(energyTransferOffers, energyTransferOffer)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllEnergyTransferOfferResponse{EnergyTransferOffer: energyTransferOffers, Pagination: pageRes}, nil
}

func (k Keeper) EnergyTransferOffer(c context.Context, req *types.QueryGetEnergyTransferOfferRequest) (*types.QueryGetEnergyTransferOfferResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	energyTransferOffer, found := k.GetEnergyTransferOffer(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetEnergyTransferOfferResponse{EnergyTransferOffer: energyTransferOffer}, nil
}
