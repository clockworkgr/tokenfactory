package keeper_test

import (
	"strconv"
	"testing"

	keepertest "github.com/clockworkgr/tokenfactory/testutil/keeper"
	"github.com/clockworkgr/tokenfactory/x/tokenfactory/keeper"
	"github.com/clockworkgr/tokenfactory/x/tokenfactory/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNDenom(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Denom {
	items := make([]types.Denom, n)
	for i := range items {
		items[i].Denom = strconv.Itoa(i)

		keeper.SetDenom(ctx, items[i])
	}
	return items
}

func TestDenomGet(t *testing.T) {
	keeper, ctx := keepertest.TokenfactoryKeeper(t)
	items := createNDenom(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetDenom(ctx,
			item.Denom,
		)
		require.True(t, found)
		require.Equal(t, item, rst)
	}
}
func TestDenomGetAll(t *testing.T) {
	keeper, ctx := keepertest.TokenfactoryKeeper(t)
	items := createNDenom(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllDenom(ctx))
}
