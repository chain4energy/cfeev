package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/chain4energy/cfeev/x/cfeev/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group cfeev queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdQueryParams())
	cmd.AddCommand(CmdListEnergyTransferOffer())
	cmd.AddCommand(CmdShowEnergyTransferOffer())
	cmd.AddCommand(CmdListEnergyTransfer())
	cmd.AddCommand(CmdShowEnergyTransfer())
	cmd.AddCommand(CmdListOwnEnergyTransferOffer())

	cmd.AddCommand(CmdListOwnEnergyTransfer())

	cmd.AddCommand(CmdListOwnerEnergyTransfer())

	// this line is used by starport scaffolding # 1

	return cmd
}
