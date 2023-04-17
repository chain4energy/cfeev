// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: cfeev/cfeev/location.proto

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

type Location struct {
	Latitude  string `protobuf:"bytes,1,opt,name=latitude,proto3" json:"latitude,omitempty"`
	Longitude string `protobuf:"bytes,2,opt,name=longitude,proto3" json:"longitude,omitempty"`
}

func (m *Location) Reset()         { *m = Location{} }
func (m *Location) String() string { return proto.CompactTextString(m) }
func (*Location) ProtoMessage()    {}
func (*Location) Descriptor() ([]byte, []int) {
	return fileDescriptor_7a237b698b152fc1, []int{0}
}
func (m *Location) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Location) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Location.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Location) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Location.Merge(m, src)
}
func (m *Location) XXX_Size() int {
	return m.Size()
}
func (m *Location) XXX_DiscardUnknown() {
	xxx_messageInfo_Location.DiscardUnknown(m)
}

var xxx_messageInfo_Location proto.InternalMessageInfo

func (m *Location) GetLatitude() string {
	if m != nil {
		return m.Latitude
	}
	return ""
}

func (m *Location) GetLongitude() string {
	if m != nil {
		return m.Longitude
	}
	return ""
}

func init() {
	proto.RegisterType((*Location)(nil), "chain4energy.cfeev.cfeev.Location")
}

func init() { proto.RegisterFile("cfeev/cfeev/location.proto", fileDescriptor_7a237b698b152fc1) }

var fileDescriptor_7a237b698b152fc1 = []byte{
	// 167 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x4a, 0x4e, 0x4b, 0x4d,
	0x2d, 0xd3, 0x87, 0x90, 0x39, 0xf9, 0xc9, 0x89, 0x25, 0x99, 0xf9, 0x79, 0x7a, 0x05, 0x45, 0xf9,
	0x25, 0xf9, 0x42, 0x12, 0xc9, 0x19, 0x89, 0x99, 0x79, 0x26, 0xa9, 0x79, 0xa9, 0x45, 0xe9, 0x95,
	0x7a, 0x60, 0x25, 0x10, 0x52, 0xc9, 0x85, 0x8b, 0xc3, 0x07, 0xaa, 0x56, 0x48, 0x8a, 0x8b, 0x23,
	0x27, 0xb1, 0x24, 0xb3, 0xa4, 0x34, 0x25, 0x55, 0x82, 0x51, 0x81, 0x51, 0x83, 0x33, 0x08, 0xce,
	0x17, 0x92, 0xe1, 0xe2, 0xcc, 0xc9, 0xcf, 0x4b, 0x87, 0x48, 0x32, 0x81, 0x25, 0x11, 0x02, 0x4e,
	0xae, 0x27, 0x1e, 0xc9, 0x31, 0x5e, 0x78, 0x24, 0xc7, 0xf8, 0xe0, 0x91, 0x1c, 0xe3, 0x84, 0xc7,
	0x72, 0x0c, 0x17, 0x1e, 0xcb, 0x31, 0xdc, 0x78, 0x2c, 0xc7, 0x10, 0xa5, 0x9d, 0x9e, 0x59, 0x92,
	0x51, 0x9a, 0xa4, 0x97, 0x9c, 0x9f, 0xab, 0x8f, 0xec, 0x08, 0xa8, 0x3b, 0x2b, 0xa0, 0x74, 0x49,
	0x65, 0x41, 0x6a, 0x71, 0x12, 0x1b, 0xd8, 0xb5, 0xc6, 0x80, 0x00, 0x00, 0x00, 0xff, 0xff, 0x35,
	0x00, 0x31, 0xe9, 0xcb, 0x00, 0x00, 0x00,
}

func (m *Location) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Location) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Location) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Longitude) > 0 {
		i -= len(m.Longitude)
		copy(dAtA[i:], m.Longitude)
		i = encodeVarintLocation(dAtA, i, uint64(len(m.Longitude)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Latitude) > 0 {
		i -= len(m.Latitude)
		copy(dAtA[i:], m.Latitude)
		i = encodeVarintLocation(dAtA, i, uint64(len(m.Latitude)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintLocation(dAtA []byte, offset int, v uint64) int {
	offset -= sovLocation(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Location) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Latitude)
	if l > 0 {
		n += 1 + l + sovLocation(uint64(l))
	}
	l = len(m.Longitude)
	if l > 0 {
		n += 1 + l + sovLocation(uint64(l))
	}
	return n
}

func sovLocation(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozLocation(x uint64) (n int) {
	return sovLocation(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Location) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowLocation
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
			return fmt.Errorf("proto: Location: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Location: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Latitude", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowLocation
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
				return ErrInvalidLengthLocation
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthLocation
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Latitude = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Longitude", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowLocation
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
				return ErrInvalidLengthLocation
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthLocation
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Longitude = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipLocation(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthLocation
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
func skipLocation(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowLocation
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
					return 0, ErrIntOverflowLocation
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
					return 0, ErrIntOverflowLocation
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
				return 0, ErrInvalidLengthLocation
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupLocation
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthLocation
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthLocation        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowLocation          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupLocation = fmt.Errorf("proto: unexpected end of group")
)
