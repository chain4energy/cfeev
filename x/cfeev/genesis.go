package cfeev

import (
	"github.com/chain4energy/cfeev/x/cfeev/keeper"
	"github.com/chain4energy/cfeev/x/cfeev/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the module's state from a provided genesis state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the energyTransferOffer
	for _, elem := range genState.EnergyTransferOfferList {
		k.SetEnergyTransferOffer(ctx, elem)
	}

	// Set energyTransferOffer count
	k.SetEnergyTransferOfferCount(ctx, genState.EnergyTransferOfferCount)
	// Set all the energyTransfer
	for _, elem := range genState.EnergyTransferList {
		k.SetEnergyTransfer(ctx, elem)
	}

	// Set energyTransfer count
	k.SetEnergyTransferCount(ctx, genState.EnergyTransferCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the module's exported genesis
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.EnergyTransferOfferList = k.GetAllEnergyTransferOffer(ctx)
	genesis.EnergyTransferOfferCount = k.GetEnergyTransferOfferCount(ctx)
	genesis.EnergyTransferList = k.GetAllEnergyTransfer(ctx)
	genesis.EnergyTransferCount = k.GetEnergyTransferCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
