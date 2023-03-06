// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: cfeev/cfeev/tx.proto

package types

import (
	context "context"
	fmt "fmt"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
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

type MsgPublishEnergyTransferOffer struct {
	Creator   string    `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	ChargerId string    `protobuf:"bytes,2,opt,name=chargerId,proto3" json:"chargerId,omitempty"`
	Tariff    string    `protobuf:"bytes,3,opt,name=tariff,proto3" json:"tariff,omitempty"`
	Location  *Location `protobuf:"bytes,4,opt,name=location,proto3" json:"location,omitempty"`
}

func (m *MsgPublishEnergyTransferOffer) Reset()         { *m = MsgPublishEnergyTransferOffer{} }
func (m *MsgPublishEnergyTransferOffer) String() string { return proto.CompactTextString(m) }
func (*MsgPublishEnergyTransferOffer) ProtoMessage()    {}
func (*MsgPublishEnergyTransferOffer) Descriptor() ([]byte, []int) {
	return fileDescriptor_202d1d64d91f912c, []int{0}
}
func (m *MsgPublishEnergyTransferOffer) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgPublishEnergyTransferOffer) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgPublishEnergyTransferOffer.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgPublishEnergyTransferOffer) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgPublishEnergyTransferOffer.Merge(m, src)
}
func (m *MsgPublishEnergyTransferOffer) XXX_Size() int {
	return m.Size()
}
func (m *MsgPublishEnergyTransferOffer) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgPublishEnergyTransferOffer.DiscardUnknown(m)
}

var xxx_messageInfo_MsgPublishEnergyTransferOffer proto.InternalMessageInfo

func (m *MsgPublishEnergyTransferOffer) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *MsgPublishEnergyTransferOffer) GetChargerId() string {
	if m != nil {
		return m.ChargerId
	}
	return ""
}

func (m *MsgPublishEnergyTransferOffer) GetTariff() string {
	if m != nil {
		return m.Tariff
	}
	return ""
}

func (m *MsgPublishEnergyTransferOffer) GetLocation() *Location {
	if m != nil {
		return m.Location
	}
	return nil
}

type MsgPublishEnergyTransferOfferResponse struct {
}

func (m *MsgPublishEnergyTransferOfferResponse) Reset()         { *m = MsgPublishEnergyTransferOfferResponse{} }
func (m *MsgPublishEnergyTransferOfferResponse) String() string { return proto.CompactTextString(m) }
func (*MsgPublishEnergyTransferOfferResponse) ProtoMessage()    {}
func (*MsgPublishEnergyTransferOfferResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_202d1d64d91f912c, []int{1}
}
func (m *MsgPublishEnergyTransferOfferResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgPublishEnergyTransferOfferResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgPublishEnergyTransferOfferResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgPublishEnergyTransferOfferResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgPublishEnergyTransferOfferResponse.Merge(m, src)
}
func (m *MsgPublishEnergyTransferOfferResponse) XXX_Size() int {
	return m.Size()
}
func (m *MsgPublishEnergyTransferOfferResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgPublishEnergyTransferOfferResponse.DiscardUnknown(m)
}

var xxx_messageInfo_MsgPublishEnergyTransferOfferResponse proto.InternalMessageInfo

type MsgStartEnergyTransferRequest struct {
	Creator               string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	EnergyTransferOfferId uint64 `protobuf:"varint,2,opt,name=energyTransferOfferId,proto3" json:"energyTransferOfferId,omitempty"`
	ChargerId             string `protobuf:"bytes,3,opt,name=chargerId,proto3" json:"chargerId,omitempty"`
	OwnerAccountAddress   string `protobuf:"bytes,4,opt,name=ownerAccountAddress,proto3" json:"ownerAccountAddress,omitempty"`
	OfferedTariff         string `protobuf:"bytes,5,opt,name=offeredTariff,proto3" json:"offeredTariff,omitempty"`
}

func (m *MsgStartEnergyTransferRequest) Reset()         { *m = MsgStartEnergyTransferRequest{} }
func (m *MsgStartEnergyTransferRequest) String() string { return proto.CompactTextString(m) }
func (*MsgStartEnergyTransferRequest) ProtoMessage()    {}
func (*MsgStartEnergyTransferRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_202d1d64d91f912c, []int{2}
}
func (m *MsgStartEnergyTransferRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgStartEnergyTransferRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgStartEnergyTransferRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgStartEnergyTransferRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgStartEnergyTransferRequest.Merge(m, src)
}
func (m *MsgStartEnergyTransferRequest) XXX_Size() int {
	return m.Size()
}
func (m *MsgStartEnergyTransferRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgStartEnergyTransferRequest.DiscardUnknown(m)
}

var xxx_messageInfo_MsgStartEnergyTransferRequest proto.InternalMessageInfo

func (m *MsgStartEnergyTransferRequest) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *MsgStartEnergyTransferRequest) GetEnergyTransferOfferId() uint64 {
	if m != nil {
		return m.EnergyTransferOfferId
	}
	return 0
}

func (m *MsgStartEnergyTransferRequest) GetChargerId() string {
	if m != nil {
		return m.ChargerId
	}
	return ""
}

func (m *MsgStartEnergyTransferRequest) GetOwnerAccountAddress() string {
	if m != nil {
		return m.OwnerAccountAddress
	}
	return ""
}

func (m *MsgStartEnergyTransferRequest) GetOfferedTariff() string {
	if m != nil {
		return m.OfferedTariff
	}
	return ""
}

type MsgStartEnergyTransferRequestResponse struct {
}

func (m *MsgStartEnergyTransferRequestResponse) Reset()         { *m = MsgStartEnergyTransferRequestResponse{} }
func (m *MsgStartEnergyTransferRequestResponse) String() string { return proto.CompactTextString(m) }
func (*MsgStartEnergyTransferRequestResponse) ProtoMessage()    {}
func (*MsgStartEnergyTransferRequestResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_202d1d64d91f912c, []int{3}
}
func (m *MsgStartEnergyTransferRequestResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgStartEnergyTransferRequestResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgStartEnergyTransferRequestResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgStartEnergyTransferRequestResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgStartEnergyTransferRequestResponse.Merge(m, src)
}
func (m *MsgStartEnergyTransferRequestResponse) XXX_Size() int {
	return m.Size()
}
func (m *MsgStartEnergyTransferRequestResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgStartEnergyTransferRequestResponse.DiscardUnknown(m)
}

var xxx_messageInfo_MsgStartEnergyTransferRequestResponse proto.InternalMessageInfo

func init() {
	proto.RegisterType((*MsgPublishEnergyTransferOffer)(nil), "cfeev.cfeev.MsgPublishEnergyTransferOffer")
	proto.RegisterType((*MsgPublishEnergyTransferOfferResponse)(nil), "cfeev.cfeev.MsgPublishEnergyTransferOfferResponse")
	proto.RegisterType((*MsgStartEnergyTransferRequest)(nil), "cfeev.cfeev.MsgStartEnergyTransferRequest")
	proto.RegisterType((*MsgStartEnergyTransferRequestResponse)(nil), "cfeev.cfeev.MsgStartEnergyTransferRequestResponse")
}

func init() { proto.RegisterFile("cfeev/cfeev/tx.proto", fileDescriptor_202d1d64d91f912c) }

var fileDescriptor_202d1d64d91f912c = []byte{
	// 369 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x49, 0x4e, 0x4b, 0x4d,
	0x2d, 0xd3, 0x87, 0x90, 0x25, 0x15, 0x7a, 0x05, 0x45, 0xf9, 0x25, 0xf9, 0x42, 0xdc, 0x60, 0xbe,
	0x1e, 0x98, 0x94, 0x92, 0x42, 0x56, 0x92, 0x93, 0x9f, 0x9c, 0x58, 0x92, 0x99, 0x9f, 0x07, 0x51,
	0xa8, 0xb4, 0x88, 0x91, 0x4b, 0xd6, 0xb7, 0x38, 0x3d, 0xa0, 0x34, 0x29, 0x27, 0xb3, 0x38, 0xc3,
	0x35, 0x2f, 0xb5, 0x28, 0xbd, 0x32, 0xa4, 0x28, 0x31, 0xaf, 0x38, 0x2d, 0xb5, 0xc8, 0x3f, 0x2d,
	0x2d, 0xb5, 0x48, 0x48, 0x82, 0x8b, 0x3d, 0xb9, 0x28, 0x35, 0xb1, 0x24, 0xbf, 0x48, 0x82, 0x51,
	0x81, 0x51, 0x83, 0x33, 0x08, 0xc6, 0x15, 0x92, 0xe1, 0xe2, 0x4c, 0xce, 0x48, 0x2c, 0x4a, 0x4f,
	0x2d, 0xf2, 0x4c, 0x91, 0x60, 0x02, 0xcb, 0x21, 0x04, 0x84, 0xc4, 0xb8, 0xd8, 0x4a, 0x12, 0x8b,
	0x32, 0xd3, 0xd2, 0x24, 0x98, 0xc1, 0x52, 0x50, 0x9e, 0x90, 0x21, 0x17, 0x07, 0xcc, 0x0d, 0x12,
	0x2c, 0x0a, 0x8c, 0x1a, 0xdc, 0x46, 0xa2, 0x7a, 0x48, 0xae, 0xd5, 0xf3, 0x81, 0x4a, 0x06, 0xc1,
	0x95, 0x29, 0xa9, 0x73, 0xa9, 0xe2, 0x75, 0x63, 0x50, 0x6a, 0x71, 0x41, 0x7e, 0x5e, 0x71, 0xaa,
	0xd2, 0x53, 0x88, 0x6f, 0x82, 0x4b, 0x12, 0x8b, 0x4a, 0x50, 0xd5, 0x05, 0xa5, 0x16, 0x96, 0xa6,
	0x16, 0x97, 0xe0, 0xf1, 0x8d, 0x09, 0x97, 0x68, 0x2a, 0xa6, 0xd1, 0x50, 0x9f, 0xb1, 0x04, 0x61,
	0x97, 0x44, 0x0d, 0x03, 0x66, 0xf4, 0x30, 0x30, 0xe0, 0x12, 0xce, 0x2f, 0xcf, 0x4b, 0x2d, 0x72,
	0x4c, 0x4e, 0xce, 0x2f, 0xcd, 0x2b, 0x71, 0x4c, 0x49, 0x29, 0x4a, 0x2d, 0x2e, 0x06, 0x7b, 0x9b,
	0x33, 0x08, 0x9b, 0x94, 0x90, 0x0a, 0x17, 0x6f, 0x3e, 0xc8, 0xe8, 0xd4, 0x94, 0x10, 0x48, 0xe0,
	0xb1, 0x82, 0xd5, 0xa2, 0x0a, 0x42, 0x03, 0x04, 0xb7, 0x37, 0x61, 0x01, 0x62, 0xd4, 0xc8, 0xc4,
	0xc5, 0xec, 0x5b, 0x9c, 0x2e, 0x54, 0xc3, 0x25, 0x85, 0x27, 0x8a, 0xb5, 0x50, 0x22, 0x00, 0x6f,
	0x50, 0x4b, 0x19, 0x11, 0xaf, 0x16, 0xe6, 0x0a, 0x90, 0xed, 0x78, 0xa2, 0x04, 0xc3, 0x76, 0xdc,
	0x6a, 0x31, 0x6d, 0x27, 0x1c, 0x06, 0x4e, 0xba, 0x27, 0x1e, 0xc9, 0x31, 0x5e, 0x78, 0x24, 0xc7,
	0xf8, 0xe0, 0x91, 0x1c, 0xe3, 0x84, 0xc7, 0x72, 0x0c, 0x17, 0x1e, 0xcb, 0x31, 0xdc, 0x78, 0x2c,
	0xc7, 0x10, 0x25, 0x0c, 0xc9, 0x12, 0x15, 0xb0, 0xdc, 0x53, 0x59, 0x90, 0x5a, 0x9c, 0xc4, 0x06,
	0xce, 0x18, 0xc6, 0x80, 0x00, 0x00, 0x00, 0xff, 0xff, 0xbc, 0x7f, 0x46, 0x4e, 0x59, 0x03, 0x00,
	0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// MsgClient is the client API for Msg service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type MsgClient interface {
	PublishEnergyTransferOffer(ctx context.Context, in *MsgPublishEnergyTransferOffer, opts ...grpc.CallOption) (*MsgPublishEnergyTransferOfferResponse, error)
	StartEnergyTransferRequest(ctx context.Context, in *MsgStartEnergyTransferRequest, opts ...grpc.CallOption) (*MsgStartEnergyTransferRequestResponse, error)
}

type msgClient struct {
	cc grpc1.ClientConn
}

func NewMsgClient(cc grpc1.ClientConn) MsgClient {
	return &msgClient{cc}
}

func (c *msgClient) PublishEnergyTransferOffer(ctx context.Context, in *MsgPublishEnergyTransferOffer, opts ...grpc.CallOption) (*MsgPublishEnergyTransferOfferResponse, error) {
	out := new(MsgPublishEnergyTransferOfferResponse)
	err := c.cc.Invoke(ctx, "/cfeev.cfeev.Msg/PublishEnergyTransferOffer", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) StartEnergyTransferRequest(ctx context.Context, in *MsgStartEnergyTransferRequest, opts ...grpc.CallOption) (*MsgStartEnergyTransferRequestResponse, error) {
	out := new(MsgStartEnergyTransferRequestResponse)
	err := c.cc.Invoke(ctx, "/cfeev.cfeev.Msg/StartEnergyTransferRequest", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MsgServer is the server API for Msg service.
type MsgServer interface {
	PublishEnergyTransferOffer(context.Context, *MsgPublishEnergyTransferOffer) (*MsgPublishEnergyTransferOfferResponse, error)
	StartEnergyTransferRequest(context.Context, *MsgStartEnergyTransferRequest) (*MsgStartEnergyTransferRequestResponse, error)
}

// UnimplementedMsgServer can be embedded to have forward compatible implementations.
type UnimplementedMsgServer struct {
}

func (*UnimplementedMsgServer) PublishEnergyTransferOffer(ctx context.Context, req *MsgPublishEnergyTransferOffer) (*MsgPublishEnergyTransferOfferResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PublishEnergyTransferOffer not implemented")
}
func (*UnimplementedMsgServer) StartEnergyTransferRequest(ctx context.Context, req *MsgStartEnergyTransferRequest) (*MsgStartEnergyTransferRequestResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method StartEnergyTransferRequest not implemented")
}

func RegisterMsgServer(s grpc1.Server, srv MsgServer) {
	s.RegisterService(&_Msg_serviceDesc, srv)
}

func _Msg_PublishEnergyTransferOffer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgPublishEnergyTransferOffer)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).PublishEnergyTransferOffer(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/cfeev.cfeev.Msg/PublishEnergyTransferOffer",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).PublishEnergyTransferOffer(ctx, req.(*MsgPublishEnergyTransferOffer))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_StartEnergyTransferRequest_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgStartEnergyTransferRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).StartEnergyTransferRequest(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/cfeev.cfeev.Msg/StartEnergyTransferRequest",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).StartEnergyTransferRequest(ctx, req.(*MsgStartEnergyTransferRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Msg_serviceDesc = grpc.ServiceDesc{
	ServiceName: "cfeev.cfeev.Msg",
	HandlerType: (*MsgServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "PublishEnergyTransferOffer",
			Handler:    _Msg_PublishEnergyTransferOffer_Handler,
		},
		{
			MethodName: "StartEnergyTransferRequest",
			Handler:    _Msg_StartEnergyTransferRequest_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "cfeev/cfeev/tx.proto",
}

func (m *MsgPublishEnergyTransferOffer) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgPublishEnergyTransferOffer) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgPublishEnergyTransferOffer) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Location != nil {
		{
			size, err := m.Location.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintTx(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x22
	}
	if len(m.Tariff) > 0 {
		i -= len(m.Tariff)
		copy(dAtA[i:], m.Tariff)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Tariff)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.ChargerId) > 0 {
		i -= len(m.ChargerId)
		copy(dAtA[i:], m.ChargerId)
		i = encodeVarintTx(dAtA, i, uint64(len(m.ChargerId)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *MsgPublishEnergyTransferOfferResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgPublishEnergyTransferOfferResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgPublishEnergyTransferOfferResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	return len(dAtA) - i, nil
}

func (m *MsgStartEnergyTransferRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgStartEnergyTransferRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgStartEnergyTransferRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.OfferedTariff) > 0 {
		i -= len(m.OfferedTariff)
		copy(dAtA[i:], m.OfferedTariff)
		i = encodeVarintTx(dAtA, i, uint64(len(m.OfferedTariff)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.OwnerAccountAddress) > 0 {
		i -= len(m.OwnerAccountAddress)
		copy(dAtA[i:], m.OwnerAccountAddress)
		i = encodeVarintTx(dAtA, i, uint64(len(m.OwnerAccountAddress)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.ChargerId) > 0 {
		i -= len(m.ChargerId)
		copy(dAtA[i:], m.ChargerId)
		i = encodeVarintTx(dAtA, i, uint64(len(m.ChargerId)))
		i--
		dAtA[i] = 0x1a
	}
	if m.EnergyTransferOfferId != 0 {
		i = encodeVarintTx(dAtA, i, uint64(m.EnergyTransferOfferId))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *MsgStartEnergyTransferRequestResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgStartEnergyTransferRequestResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgStartEnergyTransferRequestResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	return len(dAtA) - i, nil
}

func encodeVarintTx(dAtA []byte, offset int, v uint64) int {
	offset -= sovTx(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *MsgPublishEnergyTransferOffer) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.ChargerId)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.Tariff)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	if m.Location != nil {
		l = m.Location.Size()
		n += 1 + l + sovTx(uint64(l))
	}
	return n
}

func (m *MsgPublishEnergyTransferOfferResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	return n
}

func (m *MsgStartEnergyTransferRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	if m.EnergyTransferOfferId != 0 {
		n += 1 + sovTx(uint64(m.EnergyTransferOfferId))
	}
	l = len(m.ChargerId)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.OwnerAccountAddress)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.OfferedTariff)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	return n
}

func (m *MsgStartEnergyTransferRequestResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	return n
}

func sovTx(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozTx(x uint64) (n int) {
	return sovTx(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *MsgPublishEnergyTransferOffer) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
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
			return fmt.Errorf("proto: MsgPublishEnergyTransferOffer: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgPublishEnergyTransferOffer: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
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
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ChargerId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
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
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ChargerId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Tariff", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
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
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Tariff = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Location", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Location == nil {
				m.Location = &Location{}
			}
			if err := m.Location.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
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
func (m *MsgPublishEnergyTransferOfferResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
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
			return fmt.Errorf("proto: MsgPublishEnergyTransferOfferResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgPublishEnergyTransferOfferResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
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
func (m *MsgStartEnergyTransferRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
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
			return fmt.Errorf("proto: MsgStartEnergyTransferRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgStartEnergyTransferRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
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
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field EnergyTransferOfferId", wireType)
			}
			m.EnergyTransferOfferId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
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
					return ErrIntOverflowTx
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
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
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
					return ErrIntOverflowTx
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
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.OwnerAccountAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field OfferedTariff", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
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
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.OfferedTariff = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
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
func (m *MsgStartEnergyTransferRequestResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
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
			return fmt.Errorf("proto: MsgStartEnergyTransferRequestResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgStartEnergyTransferRequestResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
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
func skipTx(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowTx
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
					return 0, ErrIntOverflowTx
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
					return 0, ErrIntOverflowTx
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
				return 0, ErrInvalidLengthTx
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupTx
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthTx
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthTx        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowTx          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupTx = fmt.Errorf("proto: unexpected end of group")
)
