// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: cfeev/cfeev/event.proto

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

type EnergyTransferCreatedEvent struct {
	EnergyTransferId       uint64 `protobuf:"varint,1,opt,name=energyTransferId,proto3" json:"energyTransferId,omitempty"`
	ChargerId              string `protobuf:"bytes,2,opt,name=chargerId,proto3" json:"chargerId,omitempty"`
	EnergyAmountToTransfer int32  `protobuf:"varint,3,opt,name=energyAmountToTransfer,proto3" json:"energyAmountToTransfer,omitempty"`
	Action                 string `protobuf:"bytes,4,opt,name=action,proto3" json:"action,omitempty"`
}

func (m *EnergyTransferCreatedEvent) Reset()         { *m = EnergyTransferCreatedEvent{} }
func (m *EnergyTransferCreatedEvent) String() string { return proto.CompactTextString(m) }
func (*EnergyTransferCreatedEvent) ProtoMessage()    {}
func (*EnergyTransferCreatedEvent) Descriptor() ([]byte, []int) {
	return fileDescriptor_ee03b44c928043b8, []int{0}
}
func (m *EnergyTransferCreatedEvent) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *EnergyTransferCreatedEvent) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_EnergyTransferCreatedEvent.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *EnergyTransferCreatedEvent) XXX_Merge(src proto.Message) {
	xxx_messageInfo_EnergyTransferCreatedEvent.Merge(m, src)
}
func (m *EnergyTransferCreatedEvent) XXX_Size() int {
	return m.Size()
}
func (m *EnergyTransferCreatedEvent) XXX_DiscardUnknown() {
	xxx_messageInfo_EnergyTransferCreatedEvent.DiscardUnknown(m)
}

var xxx_messageInfo_EnergyTransferCreatedEvent proto.InternalMessageInfo

func (m *EnergyTransferCreatedEvent) GetEnergyTransferId() uint64 {
	if m != nil {
		return m.EnergyTransferId
	}
	return 0
}

func (m *EnergyTransferCreatedEvent) GetChargerId() string {
	if m != nil {
		return m.ChargerId
	}
	return ""
}

func (m *EnergyTransferCreatedEvent) GetEnergyAmountToTransfer() int32 {
	if m != nil {
		return m.EnergyAmountToTransfer
	}
	return 0
}

func (m *EnergyTransferCreatedEvent) GetAction() string {
	if m != nil {
		return m.Action
	}
	return ""
}

func init() {
	proto.RegisterType((*EnergyTransferCreatedEvent)(nil), "chain4energy.cfeev.cfeev.EnergyTransferCreatedEvent")
}

func init() { proto.RegisterFile("cfeev/cfeev/event.proto", fileDescriptor_ee03b44c928043b8) }

var fileDescriptor_ee03b44c928043b8 = []byte{
	// 225 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x4f, 0x4e, 0x4b, 0x4d,
	0x2d, 0xd3, 0x87, 0x90, 0xa9, 0x65, 0xa9, 0x79, 0x25, 0x7a, 0x05, 0x45, 0xf9, 0x25, 0xf9, 0x42,
	0x12, 0xc9, 0x19, 0x89, 0x99, 0x79, 0x26, 0xa9, 0x79, 0xa9, 0x45, 0xe9, 0x95, 0x7a, 0x60, 0x79,
	0x08, 0xa9, 0xb4, 0x8d, 0x91, 0x4b, 0xca, 0x15, 0x2c, 0x1c, 0x52, 0x94, 0x98, 0x57, 0x9c, 0x96,
	0x5a, 0xe4, 0x5c, 0x94, 0x9a, 0x58, 0x92, 0x9a, 0xe2, 0x0a, 0xd2, 0x2e, 0xa4, 0xc5, 0x25, 0x90,
	0x8a, 0x22, 0xeb, 0x99, 0x22, 0xc1, 0xa8, 0xc0, 0xa8, 0xc1, 0x12, 0x84, 0x21, 0x2e, 0x24, 0xc3,
	0xc5, 0x99, 0x9c, 0x91, 0x58, 0x94, 0x0e, 0x56, 0xc4, 0xa4, 0xc0, 0xa8, 0xc1, 0x19, 0x84, 0x10,
	0x10, 0x32, 0xe3, 0x12, 0x83, 0xe8, 0x70, 0xcc, 0xcd, 0x2f, 0xcd, 0x2b, 0x09, 0xc9, 0x87, 0xe9,
	0x94, 0x60, 0x56, 0x60, 0xd4, 0x60, 0x0d, 0xc2, 0x21, 0x2b, 0x24, 0xc6, 0xc5, 0x96, 0x98, 0x5c,
	0x92, 0x99, 0x9f, 0x27, 0xc1, 0x02, 0x36, 0x12, 0xca, 0x73, 0x72, 0x3d, 0xf1, 0x48, 0x8e, 0xf1,
	0xc2, 0x23, 0x39, 0xc6, 0x07, 0x8f, 0xe4, 0x18, 0x27, 0x3c, 0x96, 0x63, 0xb8, 0xf0, 0x58, 0x8e,
	0xe1, 0xc6, 0x63, 0x39, 0x86, 0x28, 0xed, 0xf4, 0xcc, 0x92, 0x8c, 0xd2, 0x24, 0xbd, 0xe4, 0xfc,
	0x5c, 0x7d, 0x64, 0x7f, 0x43, 0xc3, 0xa5, 0x02, 0x4a, 0x97, 0x54, 0x16, 0xa4, 0x16, 0x27, 0xb1,
	0x81, 0x03, 0xc8, 0x18, 0x10, 0x00, 0x00, 0xff, 0xff, 0x14, 0xb8, 0xed, 0x99, 0x3b, 0x01, 0x00,
	0x00,
}

func (m *EnergyTransferCreatedEvent) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *EnergyTransferCreatedEvent) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *EnergyTransferCreatedEvent) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Action) > 0 {
		i -= len(m.Action)
		copy(dAtA[i:], m.Action)
		i = encodeVarintEvent(dAtA, i, uint64(len(m.Action)))
		i--
		dAtA[i] = 0x22
	}
	if m.EnergyAmountToTransfer != 0 {
		i = encodeVarintEvent(dAtA, i, uint64(m.EnergyAmountToTransfer))
		i--
		dAtA[i] = 0x18
	}
	if len(m.ChargerId) > 0 {
		i -= len(m.ChargerId)
		copy(dAtA[i:], m.ChargerId)
		i = encodeVarintEvent(dAtA, i, uint64(len(m.ChargerId)))
		i--
		dAtA[i] = 0x12
	}
	if m.EnergyTransferId != 0 {
		i = encodeVarintEvent(dAtA, i, uint64(m.EnergyTransferId))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintEvent(dAtA []byte, offset int, v uint64) int {
	offset -= sovEvent(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *EnergyTransferCreatedEvent) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.EnergyTransferId != 0 {
		n += 1 + sovEvent(uint64(m.EnergyTransferId))
	}
	l = len(m.ChargerId)
	if l > 0 {
		n += 1 + l + sovEvent(uint64(l))
	}
	if m.EnergyAmountToTransfer != 0 {
		n += 1 + sovEvent(uint64(m.EnergyAmountToTransfer))
	}
	l = len(m.Action)
	if l > 0 {
		n += 1 + l + sovEvent(uint64(l))
	}
	return n
}

func sovEvent(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozEvent(x uint64) (n int) {
	return sovEvent(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *EnergyTransferCreatedEvent) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowEvent
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
			return fmt.Errorf("proto: EnergyTransferCreatedEvent: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: EnergyTransferCreatedEvent: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field EnergyTransferId", wireType)
			}
			m.EnergyTransferId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEvent
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.EnergyTransferId |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ChargerId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEvent
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
				return ErrInvalidLengthEvent
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEvent
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ChargerId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field EnergyAmountToTransfer", wireType)
			}
			m.EnergyAmountToTransfer = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEvent
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.EnergyAmountToTransfer |= int32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Action", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEvent
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
				return ErrInvalidLengthEvent
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEvent
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Action = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipEvent(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthEvent
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
func skipEvent(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowEvent
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
					return 0, ErrIntOverflowEvent
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
					return 0, ErrIntOverflowEvent
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
				return 0, ErrInvalidLengthEvent
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupEvent
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthEvent
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthEvent        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowEvent          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupEvent = fmt.Errorf("proto: unexpected end of group")
)
