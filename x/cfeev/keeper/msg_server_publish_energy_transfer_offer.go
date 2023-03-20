package keeper

import (
	"context"
	"strconv"

	"cfeev/x/cfeev/types"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k msgServer) PublishEnergyTransferOffer(goCtx context.Context, msg *types.MsgPublishEnergyTransferOffer) (*types.MsgPublishEnergyTransferOfferResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	tariffValue64, err := strconv.ParseFloat(msg.Tariff, 32)
	tariffValue32 := float32(tariffValue64)

	if err != nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request, incorrectly defined tariff")
	}

	// there is a 1-1 relation between the offer and the charger
	// check if another offer for this chargerId has been added
	_, found := k.GetTransferOfferByChargerId(ctx, msg.ChargerId)
	if found {
		return nil, sdkerrors.Wrap(types.ErrOfferForChargerAlreadyExists, "energy transfer offer for this charger already exists")
	}

	var energyTransferOffer = types.EnergyTransferOffer{
		Owner:         msg.Creator,
		ChargerId:     msg.ChargerId,
		ChargerStatus: types.ChargerStatus_ACTIVE,
		Location:      msg.GetLocation(),
		Tariff:        tariffValue32,
		Name:          msg.GetName(),
		PlugType:      msg.GetPlugType(),
	}

	id := k.AppendEnergyTransferOffer(ctx, energyTransferOffer)

	// place offer ID into response
	return &types.MsgPublishEnergyTransferOfferResponse{Id: id}, nil
}
