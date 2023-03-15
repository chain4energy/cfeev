package simulation

import (
	"math/rand"

	"cfeev/x/cfeev/keeper"
	"cfeev/x/cfeev/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgEnergyTransferCompletedRequest(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgEnergyTransferCompletedRequest{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the EnergyTransferCompletedRequest simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "EnergyTransferCompletedRequest simulation not implemented"), nil, nil
	}
}
