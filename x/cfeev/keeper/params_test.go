package keeper_test

import (
	"testing"

	testkeeper "cfeev/testutil/keeper"
	"cfeev/x/cfeev/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.CfeevKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
