package cli

import (
	"strconv"

	"cfeev/x/cfeev/types"
	"encoding/json"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdPublishEnergyTransferOffer() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "publish-energy-transfer-offer [charger-id] [tariff] [location]",
		Short: "Broadcast message publish-energy-transfer-offer",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argChargerId := args[0]
			argTariff := args[1]
			argLocation := new(types.Location)
			err = json.Unmarshal([]byte(args[2]), argLocation)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgPublishEnergyTransferOffer(
				clientCtx.GetFromAddress().String(),
				argChargerId,
				argTariff,
				argLocation,
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
