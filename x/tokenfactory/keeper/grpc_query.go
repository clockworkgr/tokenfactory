package keeper

import (
	"github.com/clockworkgr/tokenfactory/x/tokenfactory/types"
)

var _ types.QueryServer = Keeper{}
