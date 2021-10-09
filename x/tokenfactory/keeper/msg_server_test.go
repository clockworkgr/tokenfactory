package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/clockworkgr/tokenfactory/testutil/keeper"
	"github.com/clockworkgr/tokenfactory/x/tokenfactory/keeper"
	"github.com/clockworkgr/tokenfactory/x/tokenfactory/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.TokenfactoryKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
