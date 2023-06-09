package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/chain4energy/cfeev/testutil/keeper"
	"github.com/chain4energy/cfeev/x/cfeev/keeper"
	"github.com/chain4energy/cfeev/x/cfeev/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.CfeevKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
