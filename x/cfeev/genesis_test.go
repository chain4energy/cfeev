package cfeev_test

import (
	"testing"

	keepertest "cfeev/testutil/keeper"
	"cfeev/testutil/nullify"
	"cfeev/x/cfeev"
	"cfeev/x/cfeev/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.CfeevKeeper(t)
	cfeev.InitGenesis(ctx, *k, genesisState)
	got := cfeev.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
