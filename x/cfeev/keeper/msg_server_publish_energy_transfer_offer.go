package keeper

import (
	"context"
	"strconv"

	"cfeev/x/cfeev/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) PublishEnergyTransferOffer(goCtx context.Context, msg *types.MsgPublishEnergyTransferOffer) (*types.MsgPublishEnergyTransferOfferResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	tariffValue64, err := strconv.ParseFloat(msg.Tariff, 32)
	tariffValue32 := float32(tariffValue64)

	// TODO: add error handling
	if err != nil {

	}

	// TODO: check if another offer for this chargerID has been added
	// k.GetEnergyTransferOffer() by chargerID

	var energyTransferOffer = types.EnergyTransferOffer{
		Owner:         msg.Creator,
		ChargerId:     msg.ChargerId,
		ChargerStatus: types.ChargerStatus_ACTIVE,
		Location:      msg.GetLocation(),
		Tariff:        tariffValue32,
	}

	_ = energyTransferOffer

	id := k.AppendEnergyTransferOffer(ctx, energyTransferOffer)
	_ = id

	// TODO: place offer ID into response
	return &types.MsgPublishEnergyTransferOfferResponse{}, nil
}
