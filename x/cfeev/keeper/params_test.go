package keeper_test

import (
	"testing"

	testkeeper "github.com/chain4energy/cfeev/testutil/keeper"
	"github.com/chain4energy/cfeev/x/cfeev/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.CfeevKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
