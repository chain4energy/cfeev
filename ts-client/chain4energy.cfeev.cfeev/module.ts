// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgCancelEnergyTransferRequest } from "./types/cfeev/cfeev/tx";
import { MsgEnergyTransferStartedRequest } from "./types/cfeev/cfeev/tx";
import { MsgRemoveEnergyOffer } from "./types/cfeev/cfeev/tx";
import { MsgStartEnergyTransferRequest } from "./types/cfeev/cfeev/tx";
import { MsgEnergyTransferCompletedRequest } from "./types/cfeev/cfeev/tx";
import { MsgRemoveTransfer } from "./types/cfeev/cfeev/tx";
import { MsgPublishEnergyTransferOffer } from "./types/cfeev/cfeev/tx";


export { MsgCancelEnergyTransferRequest, MsgEnergyTransferStartedRequest, MsgRemoveEnergyOffer, MsgStartEnergyTransferRequest, MsgEnergyTransferCompletedRequest, MsgRemoveTransfer, MsgPublishEnergyTransferOffer };

type sendMsgCancelEnergyTransferRequestParams = {
  value: MsgCancelEnergyTransferRequest,
  fee?: StdFee,
  memo?: string
};

type sendMsgEnergyTransferStartedRequestParams = {
  value: MsgEnergyTransferStartedRequest,
  fee?: StdFee,
  memo?: string
};

type sendMsgRemoveEnergyOfferParams = {
  value: MsgRemoveEnergyOffer,
  fee?: StdFee,
  memo?: string
};

type sendMsgStartEnergyTransferRequestParams = {
  value: MsgStartEnergyTransferRequest,
  fee?: StdFee,
  memo?: string
};

type sendMsgEnergyTransferCompletedRequestParams = {
  value: MsgEnergyTransferCompletedRequest,
  fee?: StdFee,
  memo?: string
};

type sendMsgRemoveTransferParams = {
  value: MsgRemoveTransfer,
  fee?: StdFee,
  memo?: string
};

type sendMsgPublishEnergyTransferOfferParams = {
  value: MsgPublishEnergyTransferOffer,
  fee?: StdFee,
  memo?: string
};


type msgCancelEnergyTransferRequestParams = {
  value: MsgCancelEnergyTransferRequest,
};

type msgEnergyTransferStartedRequestParams = {
  value: MsgEnergyTransferStartedRequest,
};

type msgRemoveEnergyOfferParams = {
  value: MsgRemoveEnergyOffer,
};

type msgStartEnergyTransferRequestParams = {
  value: MsgStartEnergyTransferRequest,
};

type msgEnergyTransferCompletedRequestParams = {
  value: MsgEnergyTransferCompletedRequest,
};

type msgRemoveTransferParams = {
  value: MsgRemoveTransfer,
};

type msgPublishEnergyTransferOfferParams = {
  value: MsgPublishEnergyTransferOffer,
};


export const registry = new Registry(msgTypes);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgCancelEnergyTransferRequest({ value, fee, memo }: sendMsgCancelEnergyTransferRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCancelEnergyTransferRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCancelEnergyTransferRequest({ value: MsgCancelEnergyTransferRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCancelEnergyTransferRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgEnergyTransferStartedRequest({ value, fee, memo }: sendMsgEnergyTransferStartedRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgEnergyTransferStartedRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgEnergyTransferStartedRequest({ value: MsgEnergyTransferStartedRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgEnergyTransferStartedRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgRemoveEnergyOffer({ value, fee, memo }: sendMsgRemoveEnergyOfferParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgRemoveEnergyOffer: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgRemoveEnergyOffer({ value: MsgRemoveEnergyOffer.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgRemoveEnergyOffer: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgStartEnergyTransferRequest({ value, fee, memo }: sendMsgStartEnergyTransferRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgStartEnergyTransferRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgStartEnergyTransferRequest({ value: MsgStartEnergyTransferRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgStartEnergyTransferRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgEnergyTransferCompletedRequest({ value, fee, memo }: sendMsgEnergyTransferCompletedRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgEnergyTransferCompletedRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgEnergyTransferCompletedRequest({ value: MsgEnergyTransferCompletedRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgEnergyTransferCompletedRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgRemoveTransfer({ value, fee, memo }: sendMsgRemoveTransferParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgRemoveTransfer: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgRemoveTransfer({ value: MsgRemoveTransfer.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgRemoveTransfer: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgPublishEnergyTransferOffer({ value, fee, memo }: sendMsgPublishEnergyTransferOfferParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgPublishEnergyTransferOffer: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgPublishEnergyTransferOffer({ value: MsgPublishEnergyTransferOffer.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgPublishEnergyTransferOffer: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgCancelEnergyTransferRequest({ value }: msgCancelEnergyTransferRequestParams): EncodeObject {
			try {
				return { typeUrl: "/chain4energy.cfeev.cfeev.MsgCancelEnergyTransferRequest", value: MsgCancelEnergyTransferRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCancelEnergyTransferRequest: Could not create message: ' + e.message)
			}
		},
		
		msgEnergyTransferStartedRequest({ value }: msgEnergyTransferStartedRequestParams): EncodeObject {
			try {
				return { typeUrl: "/chain4energy.cfeev.cfeev.MsgEnergyTransferStartedRequest", value: MsgEnergyTransferStartedRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgEnergyTransferStartedRequest: Could not create message: ' + e.message)
			}
		},
		
		msgRemoveEnergyOffer({ value }: msgRemoveEnergyOfferParams): EncodeObject {
			try {
				return { typeUrl: "/chain4energy.cfeev.cfeev.MsgRemoveEnergyOffer", value: MsgRemoveEnergyOffer.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgRemoveEnergyOffer: Could not create message: ' + e.message)
			}
		},
		
		msgStartEnergyTransferRequest({ value }: msgStartEnergyTransferRequestParams): EncodeObject {
			try {
				return { typeUrl: "/chain4energy.cfeev.cfeev.MsgStartEnergyTransferRequest", value: MsgStartEnergyTransferRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgStartEnergyTransferRequest: Could not create message: ' + e.message)
			}
		},
		
		msgEnergyTransferCompletedRequest({ value }: msgEnergyTransferCompletedRequestParams): EncodeObject {
			try {
				return { typeUrl: "/chain4energy.cfeev.cfeev.MsgEnergyTransferCompletedRequest", value: MsgEnergyTransferCompletedRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgEnergyTransferCompletedRequest: Could not create message: ' + e.message)
			}
		},
		
		msgRemoveTransfer({ value }: msgRemoveTransferParams): EncodeObject {
			try {
				return { typeUrl: "/chain4energy.cfeev.cfeev.MsgRemoveTransfer", value: MsgRemoveTransfer.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgRemoveTransfer: Could not create message: ' + e.message)
			}
		},
		
		msgPublishEnergyTransferOffer({ value }: msgPublishEnergyTransferOfferParams): EncodeObject {
			try {
				return { typeUrl: "/chain4energy.cfeev.cfeev.MsgPublishEnergyTransferOffer", value: MsgPublishEnergyTransferOffer.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgPublishEnergyTransferOffer: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			Chain4EnergyCfeevCfeev: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;