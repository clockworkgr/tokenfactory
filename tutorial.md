## Create a Token Factory module

Learn how to create a token factory module using the Cosmos SDK blockchain app. Create and issue new denoms on your blockchain.

Starport / Stargate


* Install starport
 
* Scaffold chain with no default module `starport scaffold chain github.com/clockworkgr/tokenfactory --no-module`
 
* Scaffold token factory module with account and bank module dependencies `starport scaffold module tokenfactory --dep account,bank`
 
* Plan our Denom type:
	- Must hold the Denom's owner who is allowed to issue tokens, administer the Denom or transfer to a new owner (defaults to create denom tx's signer) `owner`
	- Must hold our Denom's name/ticker `ticker`
	- Must hold our Denom's base_denom name (unique/index) `denom`
	- Must hold our Denom's precision (allowed no of decimals) `precision`
	- Must hold a description for the Denom `description`
	- Must hold a url (such as the denom project's homepage) `url`
	- Must define a max supply `maxSupply`
	- Must track current supply `supply`
	- Must have a flag defining whether max supply can be changed (can only go from can be changed to can't be changed) `canChangeMaxSupply`

* Scaffold our Denom type `starport scaffold map Denom description:string ticker:string precision:int url:string maxSupply:int supply:int canChangeMaxSupply:bool --signer owner --index denom --module tokenfactory`

* Since a created denom is subsequently handled by the Bank module like any other native denom, it should not be deletable. Hence, let us remove all references to the Delete action of the scaffolded CRUD type.
	- `proto/tokenfactory/tx.proto` 
		- Remove `rpc DeleteDenom(MsgDeleteDenom) returns (MsgDeleteDenomResponse);` from the services
		- Remove `MsgDeleteDenom` & `MsgDeleteDenomResponse` messages
	- `x/tokenfactory/client/cli/tx_denom_test.go`
		- Remove the `TestDeleteDenom()` function
	- `x/tokenfactory/client/cli/tx_denom.go`
		- Remove the `CmdDeleteDenom()` function
	- `x/tokenfactory/client/cli/tx.go`
		- Remove the line that adds the delete command `cmd.AddCommand(CmdDeleteDenom())`
	- `x/tokenfactory/keeper/denom_test.go`
		- Remove the `TestDenomRemove` function
	- `x/tokenfactory/keeper/denom.go`
		- Remove the `RemoveDenom` function
	- `x/tokenfactory/keeper/msg_server_denom_test.go`
		- Remove the `TestDenomMsgServerDelete` function
	- `x/tokenfactory/keeper/msg_server_denom.go`
		- Remove the `DeleteDenom` function
	- `x/tokenfactory/types/codec.go`
		- Remove the codec and interface registrations for `MsgDeleteDenom`
	- `x/tokenfactory/types/messages_denom_test.go`
		- Remove the `TestMsgDeleteDenom_ValidateBasic` function
	- `x/tokenfactory/types/messages_denom.go`
		- Remove the entire part referring to `MsgDeleteDenom` 
	- `x/tokenfactory/handler.go`
		- Remove `MsgDeleteDenom` case from `NewHandler` function

It is now time to implement our custom logic and wire our module up to the bank module

* First, let's add the interface methods we are going to need to `x/tokenfactory/types/expected_keepers.go`
	- Replace the contents of the file with: 
	```
	package types
	
	import (
		sdk "github.com/cosmos/cosmos-sdk/types"
		authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
	)
	
	type AccountKeeper interface {
		GetAccount(ctx sdk.Context, addr sdk.AccAddress) authtypes.AccountI
		GetModuleAddress(name string) sdk.AccAddress
		GetModuleAccount(ctx sdk.Context, moduleName string) authtypes.ModuleAccountI
	}
	
	type BankKeeper interface {
		SendCoins(ctx sdk.Context, fromAddr sdk.AccAddress, toAddr sdk.AccAddress, amt sdk.Coins) error
		MintCoins(ctx sdk.Context, moduleName string, amt sdk.Coins) error
	}
	```
* In order to fit with our token factory logic we need to make some adjustments to the create and update messages, their handlers and their corresponding CLI commands. For MsgCreateDenom, the user should not be able to set the supply as a newly created denom will always have a supply of 0. For MsgUpdateDenom, the user should not be able to change the ticker, the supply or the precision.
	- `proto/tokenfactory/tx.proto` 
			- Remove `int32 supply = 8;` from MsgCreateDenom and change the field order acccordingly so `canChangeMaxSupply` becomes 8 from 9
			- Remove `string ticker = 4;` , `int32 precision = 5;`, `int32 supply = 8;` from MsgUpdateDenom and change field order for the rest of the fields appropriately
	- `x/tokenfactory/client/cli/tx_denom.go`
		- Change the number of args to 7 from 8 in `CmdCreateDenom()`and remove references to the supply argument, reordering args accordingly. Also change the usage descriptions.
		- Change the number of args to 5 from 8 in `CmdUpdateDenom()`and remove references to the supply, precision and ticker arguments, reordering args accordingly. Also change the usage descriptions.
	- `x/tokenfactory/client/cli/tx_denom_test.go`
		-	Adjust tests to match changes above
	- `x/tokenfactory/types/messages_denom.go`
		- Remove the relevant fields above from method signatures and retuend instances
	- `x/tokenfactory/keeper/msg_server_denom.go`
* Before we start implementing our custom logic for creating and updating denoms, let's add some basic validation to the inputs. We can restrict ticker to between 3 and 10 chars and also we want maxSupply to be greater than 0
	- `x/tokenfactory/types/messages_denom.go`
		- Modify MsgCreateDenom's `ValidateBasic()` function like so:
		```
		func (msg *MsgCreateDenom) ValidateBasic() error {
			_, err := sdk.AccAddressFromBech32(msg.Owner)
			if err != nil {
				return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid owner address (%s)", err)
			}

			tickerLength := len(msg.Ticker)
			if tickerLength < 3 {
				return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "Ticker length must be at least 3 chars long")
			}
			if tickerLength > 10 {
				return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "Ticker length must be 10 chars long maximum")
			}
			if msg.MaxSupply == 0 {
				return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "Max Supply must be greater than 0")
			}
			
			return nil
		}
		```
		- Modify MsgUpdateDenom's `ValidateBasic()` function like so:
		```
		func (msg *MsgUpdateDenom) ValidateBasic() error {
			_, err := sdk.AccAddressFromBech32(msg.Owner)
			if err != nil {
				return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid owner address (%s)", err)
			}
			if msg.MaxSupply == 0 {
				return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "Max Supply must be greater than 0")
			}
			return nil
		}
		```
* Now, let's add our custom logic 
	- `x/tokenfactory/keeper/msg_server_denom.go`
		- Modify the `CreateDenom()` function like so:
		```
		func (k msgServer) CreateDenom(goCtx context.Context, msg *types.MsgCreateDenom) (*types.MsgCreateDenomResponse, error) {
			ctx := sdk.UnwrapSDKContext(goCtx)

			// Check if the value already exists
			_, isFound := k.GetDenom(
				ctx,
				msg.Denom,
			)
			if isFound {
				return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Denom already exists")
			}
			var denom = types.Denom{
				Owner:              msg.Owner,
				Denom:              msg.Denom,
				Description:        msg.Description,
				Ticker:             msg.Ticker,
				Precision:          msg.Precision,
				Url:                msg.Url,
				MaxSupply:          msg.MaxSupply,
				Supply:             0,
				CanChangeMaxSupply: msg.CanChangeMaxSupply,
			}

			k.SetDenom(
				ctx,
				denom,
			)
			return &types.MsgCreateDenomResponse{}, nil
		}
		```
		- Modify the `UpdateDenom()` function like so:
		```
		func (k msgServer) UpdateDenom(goCtx context.Context, msg *types.MsgUpdateDenom) (*types.MsgUpdateDenomResponse, error) {
			ctx := sdk.UnwrapSDKContext(goCtx)

			// Check if the value exists
			valFound, isFound := k.GetDenom(
				ctx,
				msg.Denom,
			)
			if !isFound {
				return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
			}

			// Checks if the the msg owner is the same as the current owner
			if msg.Owner != valFound.Owner {
				return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
			}

			if !valFound.CanChangeMaxSupply && valFound.MaxSupply != msg.MaxSupply {
				return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "cannot change maxsupply")
			}
			if !valFound.CanChangeMaxSupply && msg.CanChangeMaxSupply {
				return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Cannot revert change maxsupply flag")
			}
			var denom = types.Denom{
				Owner:              msg.Owner,
				Denom:              msg.Denom,
				Description:        msg.Description,
				Ticker:             valFound.Ticker,
				Precision:          valFound.Precision,
				Url:                msg.Url,
				MaxSupply:          msg.MaxSupply,
				Supply:             valFound.Supply,
				CanChangeMaxSupply: msg.CanChangeMaxSupply,
			}

			k.SetDenom(ctx, denom)

			return &types.MsgUpdateDenomResponse{}, nil
		}
		```
* Now that everything is in place, we can scaffold two additional messages to complete our token factory's functionality: a MintAndSendTokens message and an UpdateOwner message
	- `starport scaffold message MintAndSendTokens denom:string amount:int recipient:string --module tokenfactory --signer owner`
	- `starport scaffold message UpdateOwner denom:string newOwner:string --module tokenfactory --signer owner`
	- Modify `x/tokenfactory/keeper/msg_server_mint_and_send_tokens.go` like so:
	```
	package keeper

	import (
		"context"

		sdk "github.com/cosmos/cosmos-sdk/types"
		sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
		"github.com/clockworkgr/tokenfactory/x/tokenfactory/types"
	)

	func (k msgServer) MintAndSendTokens(goCtx context.Context, msg *types.MsgMintAndSendTokens) (*types.MsgMintAndSendTokensResponse, error) {
		ctx := sdk.UnwrapSDKContext(goCtx)

		// Check if the value exists
		valFound, isFound := k.GetDenom(
			ctx,
			msg.Denom,
		)
		if !isFound {
			return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "denom does not exist")
		}

		// Checks if the the msg owner is the same as the current owner
		if msg.Owner != valFound.Owner {
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
		}

		if valFound.Supply+msg.Amount > valFound.MaxSupply {
			return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Cannot mint more than Max Supply")
		}
		moduleAcct := k.accountKeeper.GetModuleAddress(types.ModuleName)

		recipientAddress, err := sdk.AccAddressFromBech32(msg.Recipient)
		if err != nil {
			return nil, err
		}

		var mintCoins sdk.Coins

		mintCoins = mintCoins.Add(sdk.NewCoin(msg.Denom, sdk.NewInt(int64(msg.Amount))))
		if err := k.bankKeeper.MintCoins(ctx, types.ModuleName, mintCoins); err != nil {
			return nil, err
		}
		if err := k.bankKeeper.SendCoins(ctx, moduleAcct, recipientAddress, mintCoins); err != nil {
			return nil, err
		}

		var denom = types.Denom{
			Owner:              valFound.Owner,
			Denom:              valFound.Denom,
			Description:        valFound.Description,
			MaxSupply:          valFound.MaxSupply,
			Supply:             valFound.Supply + msg.Amount,
			Precision:          valFound.Precision,
			Ticker:             valFound.Ticker,
			Url:                valFound.Url,
			CanChangeMaxSupply: valFound.CanChangeMaxSupply,
		}

		k.SetDenom(
			ctx,
			denom,
		)
		return &types.MsgMintAndSendTokensResponse{}, nil
	}
	```
	- And modify `x/tokenfactory/keeper/msg_server_update_owner.go` like so:
	```
	package keeper

	import (
		"context"

		sdk "github.com/cosmos/cosmos-sdk/types"
		sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
		"github.com/clockworkgr/tokenfactory/x/tokenfactory/types"
	)

	func (k msgServer) UpdateOwner(goCtx context.Context, msg *types.MsgUpdateOwner) (*types.MsgUpdateOwnerResponse, error) {
		ctx := sdk.UnwrapSDKContext(goCtx)

		// Check if the value exists
		valFound, isFound := k.GetDenom(
			ctx,
			msg.Denom,
		)
		if !isFound {
			return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "denom does not exist")
		}

		// Checks if the the msg owner is the same as the current owner
		if msg.Owner != valFound.Owner {
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
		}

		var denom = types.Denom{
			Owner:              msg.NewOwner,
			Denom:              msg.Denom,
			Description:        valFound.Description,
			MaxSupply:          valFound.MaxSupply,
			Supply:             valFound.Supply,
			Precision:          valFound.Precision,
			Ticker:             valFound.Ticker,
			Url:                valFound.Url,
			CanChangeMaxSupply: valFound.CanChangeMaxSupply,
		}

		k.SetDenom(
			ctx,
			denom,
		)

		return &types.MsgUpdateOwnerResponse{}, nil
	}
	```
* We can now test our Token Factory. 
	- First build and start the chain with `staport chain serve`
	- Once the chain starts, in a different terminal, run `tokenfactoryd tx tokenfactory create-denom ustarport "My denom" STARPORT 6 "someurl" 1000000000 true --from alice` and confirm.
	- Run `tokenfactoryd query tokenfactory list-denom` to see your newly created denom
	- To test the update denom functionality, let's change the max supply to 2000000000 and the description and URL fields as well as locking down the max supply by running `tokenfactoryd tx tokenfactory update-denom ustarport "Starport" "newurl" 2000000000 false --from alice `
	- Run `tokenfactoryd query tokenfactory list-denom` again to see the changes
	- Let's mint some ustarport tokens and send them to a different address. Run `tokenfactoryd tx tokenfactory mint-and-send-tokens ustarport 1200 cosmos16x46rxvtkmgph6jnkqs80tzlzk6wpy6ftrgh6t --from alice`
	- Run `tokenfactoryd query bank balances cosmos16x46rxvtkmgph6jnkqs80tzlzk6wpy6ftrgh6t` to see this newly created native denom in the account's bank balances!
	- Run `tokenfactoryd query tokenfactory list-denom` to see the updated supply.
	- Finally let's transfer ownership of the denom to a different account. Run `tokenfactoryd tx tokenfactory update-owner ustarport cosmos16x46rxvtkmgph6jnkqs80tzlzk6wpy6ftrgh6t --from alice` and `tokenfactoryd query tokenfactory list-denom` to verify the changes.
	- Run `tokenfactoryd tx tokenfactory mint-and-send-tokens ustarport 1200 cosmos16x46rxvtkmgph6jnkqs80tzlzk6wpy6ftrgh6t --from alice` to confirm that alice may no longer mint and send tokens since she is no longer the owner.