package cfeev

import (
	"math/rand"

	"cfeev/testutil/sample"
	cfeevsimulation "cfeev/x/cfeev/simulation"
	"cfeev/x/cfeev/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = cfeevsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgPublishEnergyTransferOffer = "op_weight_msg_publish_energy_transfer_offer"
	// TODO: Determine the simulation weight value
	defaultWeightMsgPublishEnergyTransferOffer int = 100

	opWeightMsgStartEnergyTransferRequest = "op_weight_msg_start_energy_transfer_request"
	// TODO: Determine the simulation weight value
	defaultWeightMsgStartEnergyTransferRequest int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	cfeevGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&cfeevGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgPublishEnergyTransferOffer int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgPublishEnergyTransferOffer, &weightMsgPublishEnergyTransferOffer, nil,
		func(_ *rand.Rand) {
			weightMsgPublishEnergyTransferOffer = defaultWeightMsgPublishEnergyTransferOffer
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgPublishEnergyTransferOffer,
		cfeevsimulation.SimulateMsgPublishEnergyTransferOffer(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgStartEnergyTransferRequest int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgStartEnergyTransferRequest, &weightMsgStartEnergyTransferRequest, nil,
		func(_ *rand.Rand) {
			weightMsgStartEnergyTransferRequest = defaultWeightMsgStartEnergyTransferRequest
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgStartEnergyTransferRequest,
		cfeevsimulation.SimulateMsgStartEnergyTransferRequest(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
