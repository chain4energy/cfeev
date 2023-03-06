package cli

import (
	"strconv"

	"cfeev/x/cfeev/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdStartEnergyTransferRequest() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "start-energy-transfer-request [energy-transfer-offer-id] [charger-id] [owner-account-address] [offered-tariff]",
		Short: "Broadcast message start-energy-transfer-request",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argEnergyTransferOfferId, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argChargerId := args[1]
			argOwnerAccountAddress := args[2]
			argOfferedTariff := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgStartEnergyTransferRequest(
				clientCtx.GetFromAddress().String(),
				argEnergyTransferOfferId,
				argChargerId,
				argOwnerAccountAddress,
				argOfferedTariff,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
