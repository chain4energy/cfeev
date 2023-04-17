package types

import (
	"testing"

	"github.com/chain4energy/cfeev/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgStartEnergyTransferRequest_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgStartEnergyTransferRequest
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgStartEnergyTransferRequest{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgStartEnergyTransferRequest{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
