package simulation

import (
	"math/rand"

	"github.com/chain4energy/cfeev/x/cfeev/keeper"
	"github.com/chain4energy/cfeev/x/cfeev/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgEnergyTransferStartedRequest(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgEnergyTransferStartedRequest{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the EnergyTransferStartedRequest simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "EnergyTransferStartedRequest simulation not implemented"), nil, nil
	}
}
