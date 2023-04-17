// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: cfeev/cfeev/energy_transfer.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type TransferStatus int32

const (
	TransferStatus_REQUESTED TransferStatus = 0
	TransferStatus_ONGOING   TransferStatus = 1
	TransferStatus_PAID      TransferStatus = 2
	TransferStatus_CANCELLED TransferStatus = 3
)

var TransferStatus_name = map[int32]string{
	0: "REQUESTED",
	1: "ONGOING",
	2: "PAID",
	3: "CANCELLED",
}

var TransferStatus_value = map[string]int32{
	"REQUESTED": 0,
	"ONGOING":   1,
	"PAID":      2,
	"CANCELLED": 3,
}

func (x TransferStatus) String() string {
	return proto.EnumName(TransferStatus_name, int32(x))
}

func (TransferStatus) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_5a73aadc8216b491, []int{0}
}

type EnergyTransfer struct {
	Id                    uint64         `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	EnergyTransferOfferId uint64         `protobuf:"varint,2,opt,name=energyTransferOfferId,proto3" json:"energyTransferOfferId,omitempty"`
	ChargerId             string         `protobuf:"bytes,3,opt,name=chargerId,proto3" json:"chargerId,omitempty"`
	OwnerAccountAddress   string         `protobuf:"bytes,4,opt,name=ownerAccountAddress,proto3" json:"ownerAccountAddress,omitempty"`
	DriverAccountAddress  string         `protobuf:"bytes,5,opt,name=driverAccountAddress,proto3" json:"driverAccountAddress,omitempty"`
	OfferedTariff         int32          `protobuf:"varint,6,opt,name=offeredTariff,proto3" json:"offeredTariff,omitempty"`
	Status                TransferStatus `protobuf:"varint,7,opt,name=status,proto3,enum=cfeev.cfeev.TransferStatus" json:"status,omitempty"`
	Collateral            uint64         `protobuf:"varint,8,opt,name=collateral,proto3" json:"collateral,omitempty"`
	EnergyToTransfer      int32          `protobuf:"varint,9,opt,name=energyToTransfer,proto3" json:"energyToTransfer,omitempty"`
	EnergyTransferred     int32          `protobuf:"varint,10,opt,name=energyTransferred,proto3" json:"energyTransferred,omitempty"`
	PaidDate              string         `protobuf:"bytes,11,opt,name=paidDate,proto3" json:"paidDate,omitempty"`
}

func (m *EnergyTransfer) Reset()         { *m = EnergyTransfer{} }
func (m *EnergyTransfer) String() string { return proto.CompactTextString(m) }
func (*EnergyTransfer) ProtoMessage()    {}
func (*EnergyTransfer) Descriptor() ([]byte, []int) {
	return fileDescriptor_5a73aadc8216b491, []int{0}
}
func (m *EnergyTransfer) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *EnergyTransfer) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_EnergyTransfer.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *EnergyTransfer) XXX_Merge(src proto.Message) {
	xxx_messageInfo_EnergyTransfer.Merge(m, src)
}
func (m *EnergyTransfer) XXX_Size() int {
	return m.Size()
}
func (m *EnergyTransfer) XXX_DiscardUnknown() {
	xxx_messageInfo_EnergyTransfer.DiscardUnknown(m)
}

var xxx_messageInfo_EnergyTransfer proto.InternalMessageInfo

func (m *EnergyTransfer) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *EnergyTransfer) GetEnergyTransferOfferId() uint64 {
	if m != nil {
		return m.EnergyTransferOfferId
	}
	return 0
}

func (m *EnergyTransfer) GetChargerId() string {
	if m != nil {
		return m.ChargerId
	}
	return ""
}

func (m *EnergyTransfer) GetOwnerAccountAddress() string {
	if m != nil {
		return m.OwnerAccountAddress
	}
	return ""
}

func (m *EnergyTransfer) GetDriverAccountAddress() string {
	if m != nil {
		return m.DriverAccountAddress
	}
	return ""
}

func (m *EnergyTransfer) GetOfferedTariff() int32 {
	if m != nil {
		return m.OfferedTariff
	}
	return 0
}

func (m *EnergyTransfer) GetStatus() TransferStatus {
	if m != nil {
		return m.Status
	}
	return TransferStatus_REQUESTED
}

func (m *EnergyTransfer) GetCollateral() uint64 {
	if m != nil {
		return m.Collateral
	}
	return 0
}

func (m *EnergyTransfer) GetEnergyToTransfer() int32 {
	if m != nil {
		return m.EnergyToTransfer
	}
	return 0
}

func (m *EnergyTransfer) GetEnergyTransferred() int32 {
	if m != nil {
		return m.EnergyTransferred
	}
	return 0
}

func (m *EnergyTransfer) GetPaidDate() string {
	if m != nil {
		return m.PaidDate
	}
	return ""
}

func init() {
	proto.RegisterEnum("github.com/chain4energy/cfeev.cfeev.TransferStatus", TransferStatus_name, TransferStatus_value)
	proto.RegisterType((*EnergyTransfer)(nil), "github.com/chain4energy/cfeev.cfeev.EnergyTransfer")
}

func init() {
	proto.RegisterFile("github.com/chain4energy/cfeev/cfeev/energy_transfer.proto", fileDescriptor_5a73aadc8216b491)
}

var fileDescriptor_5a73aadc8216b491 = []byte{
	// 386 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x6c, 0x92, 0xc1, 0xee, 0xd2, 0x40,
	0x10, 0xc6, 0xbb, 0x85, 0x3f, 0x7f, 0x3a, 0x84, 0xa6, 0x2e, 0x9a, 0x6c, 0xd4, 0x34, 0xd5, 0x78,
	0x68, 0x88, 0x56, 0x03, 0xbe, 0x40, 0xa5, 0x0d, 0x21, 0x21, 0xa0, 0x05, 0x2f, 0x5e, 0xcc, 0xda,
	0xdd, 0x62, 0x13, 0xd2, 0x92, 0xed, 0x82, 0xf2, 0x16, 0x3e, 0x96, 0x89, 0x17, 0x8e, 0x1e, 0x0d,
	0xbc, 0x88, 0x61, 0x29, 0x4a, 0x03, 0x97, 0x49, 0xfa, 0x7d, 0xbf, 0xe9, 0xce, 0x7c, 0x19, 0x78,
	0x16, 0x27, 0x9c, 0x6f, 0x5e, 0x9f, 0x2a, 0xcf, 0xb8, 0x58, 0x6c, 0x3f, 0x4b, 0x41, 0xb3, 0x22,
	0xe1, 0xc2, 0x5b, 0x89, 0x5c, 0xe6, 0xb8, 0xa5, 0x4c, 0x4f, 0xd5, 0xe7, 0xbf, 0x6a, 0x60, 0x86,
	0x0a, 0x9b, 0x97, 0x14, 0x36, 0x41, 0x4f, 0x19, 0x41, 0x0e, 0x72, 0xeb, 0x91, 0x9e, 0x32, 0xfc,
	0x16, 0x1e, 0xf1, 0x0a, 0x31, 0x4d, 0x12, 0x2e, 0x46, 0x8c, 0xe8, 0x0a, 0xb9, 0x6d, 0xe2, 0xa7,
	0x60, 0xc4, 0x5f, 0xa9, 0x58, 0x28, 0xb2, 0xe6, 0x20, 0xd7, 0x88, 0xfe, 0x0b, 0xf8, 0x0d, 0x74,
	0xf2, 0x6f, 0x19, 0x17, 0x7e, 0x1c, 0xe7, 0xeb, 0x4c, 0xfa, 0x8c, 0x09, 0x5e, 0x14, 0xa4, 0xae,
	0xb8, 0x5b, 0x16, 0xee, 0xc1, 0x43, 0x26, 0xd2, 0xcd, 0x55, 0xcb, 0x9d, 0x6a, 0xb9, 0xe9, 0xe1,
	0x17, 0xd0, 0xce, 0x8f, 0xe3, 0x70, 0x36, 0xa7, 0x22, 0x4d, 0x12, 0xd2, 0x70, 0x90, 0x7b, 0x17,
	0x55, 0x45, 0xdc, 0x87, 0x46, 0x21, 0xa9, 0x5c, 0x17, 0xe4, 0xde, 0x41, 0xae, 0xd9, 0x7b, 0xe2,
	0x5d, 0x04, 0xe4, 0x9d, 0xf7, 0x9a, 0x29, 0x24, 0x2a, 0x51, 0x6c, 0x03, 0xc4, 0xf9, 0x72, 0x49,
	0x25, 0x17, 0x74, 0x49, 0x9a, 0x2a, 0x89, 0x0b, 0x05, 0x77, 0xc1, 0x2a, 0x73, 0xc9, 0xcf, 0x7f,
	0x20, 0x86, 0x7a, 0xfd, 0x4a, 0xc7, 0x2f, 0xe1, 0x41, 0x35, 0x43, 0xc1, 0x19, 0x01, 0x05, 0x5f,
	0x1b, 0xf8, 0x31, 0x34, 0x57, 0x34, 0x65, 0x01, 0x95, 0x9c, 0xb4, 0xd4, 0xf2, 0xff, 0xbe, 0xbb,
	0x21, 0x98, 0xd5, 0x79, 0x71, 0x1b, 0x8c, 0x28, 0xfc, 0xf0, 0x31, 0x9c, 0xcd, 0xc3, 0xc0, 0xd2,
	0x70, 0x0b, 0xee, 0xa7, 0x93, 0xe1, 0x74, 0x34, 0x19, 0x5a, 0x08, 0x37, 0xa1, 0xfe, 0xde, 0x1f,
	0x05, 0x96, 0x7e, 0xa4, 0x06, 0xfe, 0x64, 0x10, 0x8e, 0xc7, 0x61, 0x60, 0xd5, 0xde, 0xbd, 0xfa,
	0xb9, 0xb7, 0xd1, 0x6e, 0x6f, 0xa3, 0x3f, 0x7b, 0x1b, 0xfd, 0x38, 0xd8, 0xda, 0xee, 0x60, 0x6b,
	0xbf, 0x0f, 0xb6, 0xf6, 0xa9, 0x73, 0x3a, 0xac, 0xef, 0xe5, 0x81, 0xc9, 0xed, 0x8a, 0x17, 0x5f,
	0x1a, 0xea, 0xae, 0xfa, 0x7f, 0x03, 0x00, 0x00, 0xff, 0xff, 0x9d, 0x3e, 0x05, 0x6a, 0x7c, 0x02,
	0x00, 0x00,
}

func (m *EnergyTransfer) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *EnergyTransfer) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *EnergyTransfer) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.PaidDate) > 0 {
		i -= len(m.PaidDate)
		copy(dAtA[i:], m.PaidDate)
		i = encodeVarintEnergyTransfer(dAtA, i, uint64(len(m.PaidDate)))
		i--
		dAtA[i] = 0x5a
	}
	if m.EnergyTransferred != 0 {
		i = encodeVarintEnergyTransfer(dAtA, i, uint64(m.EnergyTransferred))
		i--
		dAtA[i] = 0x50
	}
	if m.EnergyToTransfer != 0 {
		i = encodeVarintEnergyTransfer(dAtA, i, uint64(m.EnergyToTransfer))
		i--
		dAtA[i] = 0x48
	}
	if m.Collateral != 0 {
		i = encodeVarintEnergyTransfer(dAtA, i, uint64(m.Collateral))
		i--
		dAtA[i] = 0x40
	}
	if m.Status != 0 {
		i = encodeVarintEnergyTransfer(dAtA, i, uint64(m.Status))
		i--
		dAtA[i] = 0x38
	}
	if m.OfferedTariff != 0 {
		i = encodeVarintEnergyTransfer(dAtA, i, uint64(m.OfferedTariff))
		i--
		dAtA[i] = 0x30
	}
	if len(m.DriverAccountAddress) > 0 {
		i -= len(m.DriverAccountAddress)
		copy(dAtA[i:], m.DriverAccountAddress)
		i = encodeVarintEnergyTransfer(dAtA, i, uint64(len(m.DriverAccountAddress)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.OwnerAccountAddress) > 0 {
		i -= len(m.OwnerAccountAddress)
		copy(dAtA[i:], m.OwnerAccountAddress)
		i = encodeVarintEnergyTransfer(dAtA, i, uint64(len(m.OwnerAccountAddress)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.ChargerId) > 0 {
		i -= len(m.ChargerId)
		copy(dAtA[i:], m.ChargerId)
		i = encodeVarintEnergyTransfer(dAtA, i, uint64(len(m.ChargerId)))
		i--
		dAtA[i] = 0x1a
	}
	if m.EnergyTransferOfferId != 0 {
		i = encodeVarintEnergyTransfer(dAtA, i, uint64(m.EnergyTransferOfferId))
		i--
		dAtA[i] = 0x10
	}
	if m.Id != 0 {
		i = encodeVarintEnergyTransfer(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintEnergyTransfer(dAtA []byte, offset int, v uint64) int {
	offset -= sovEnergyTransfer(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *EnergyTransfer) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Id != 0 {
		n += 1 + sovEnergyTransfer(uint64(m.Id))
	}
	if m.EnergyTransferOfferId != 0 {
		n += 1 + sovEnergyTransfer(uint64(m.EnergyTransferOfferId))
	}
	l = len(m.ChargerId)
	if l > 0 {
		n += 1 + l + sovEnergyTransfer(uint64(l))
	}
	l = len(m.OwnerAccountAddress)
	if l > 0 {
		n += 1 + l + sovEnergyTransfer(uint64(l))
	}
	l = len(m.DriverAccountAddress)
	if l > 0 {
		n += 1 + l + sovEnergyTransfer(uint64(l))
	}
	if m.OfferedTariff != 0 {
		n += 1 + sovEnergyTransfer(uint64(m.OfferedTariff))
	}
	if m.Status != 0 {
		n += 1 + sovEnergyTransfer(uint64(m.Status))
	}
	if m.Collateral != 0 {
		n += 1 + sovEnergyTransfer(uint64(m.Collateral))
	}
	if m.EnergyToTransfer != 0 {
		n += 1 + sovEnergyTransfer(uint64(m.EnergyToTransfer))
	}
	if m.EnergyTransferred != 0 {
		n += 1 + sovEnergyTransfer(uint64(m.EnergyTransferred))
	}
	l = len(m.PaidDate)
	if l > 0 {
		n += 1 + l + sovEnergyTransfer(uint64(l))
	}
	return n
}

func sovEnergyTransfer(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozEnergyTransfer(x uint64) (n int) {
	return sovEnergyTransfer(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *EnergyTransfer) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowEnergyTransfer
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: EnergyTransfer: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: EnergyTransfer: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEnergyTransfer
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field EnergyTransferOfferId", wireType)
			}
			m.EnergyTransferOfferId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEnergyTransfer
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.EnergyTransferOfferId |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ChargerId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEnergyTransfer
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthEnergyTransfer
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEnergyTransfer
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ChargerId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field OwnerAccountAddress", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEnergyTransfer
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthEnergyTransfer
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEnergyTransfer
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.OwnerAccountAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DriverAccountAddress", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEnergyTransfer
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthEnergyTransfer
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEnergyTransfer
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DriverAccountAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field OfferedTariff", wireType)
			}
			m.OfferedTariff = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEnergyTransfer
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.OfferedTariff |= int32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 7:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Status", wireType)
			}
			m.Status = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEnergyTransfer
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Status |= TransferStatus(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 8:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Collateral", wireType)
			}
			m.Collateral = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEnergyTransfer
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Collateral |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 9:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field EnergyToTransfer", wireType)
			}
			m.EnergyToTransfer = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEnergyTransfer
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.EnergyToTransfer |= int32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 10:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field EnergyTransferred", wireType)
			}
			m.EnergyTransferred = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEnergyTransfer
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.EnergyTransferred |= int32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 11:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PaidDate", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEnergyTransfer
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthEnergyTransfer
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEnergyTransfer
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PaidDate = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipEnergyTransfer(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthEnergyTransfer
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipEnergyTransfer(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowEnergyTransfer
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowEnergyTransfer
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowEnergyTransfer
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthEnergyTransfer
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupEnergyTransfer
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthEnergyTransfer
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthEnergyTransfer        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowEnergyTransfer          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupEnergyTransfer = fmt.Errorf("proto: unexpected end of group")
)
