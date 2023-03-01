package keeper_test

import (
	"context"
	"testing"

	keepertest "cfeev/testutil/keeper"
	"cfeev/x/cfeev/keeper"
	"cfeev/x/cfeev/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.CfeevKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
