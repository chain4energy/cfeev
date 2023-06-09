import { Client, registry, MissingWalletError } from 'chain4energy-cfeev-client-ts'

import { EnergyTransfer } from "chain4energy-cfeev-client-ts/chain4energy.cfeev.cfeev/types"
import { EnergyTransferOffer } from "chain4energy-cfeev-client-ts/chain4energy.cfeev.cfeev/types"
import { EnergyTransferCreatedEvent } from "chain4energy-cfeev-client-ts/chain4energy.cfeev.cfeev/types"
import { Location } from "chain4energy-cfeev-client-ts/chain4energy.cfeev.cfeev/types"
import { Params } from "chain4energy-cfeev-client-ts/chain4energy.cfeev.cfeev/types"


export { EnergyTransfer, EnergyTransferOffer, EnergyTransferCreatedEvent, Location, Params };

function initClient(vuexGetters) {
	return new Client(vuexGetters['common/env/getEnv'], vuexGetters['common/wallet/signer'])
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	let structure: {fields: Field[]} = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const getDefaultState = () => {
	return {
				Params: {},
				EnergyTransferOffer: {},
				EnergyTransferOfferAll: {},
				EnergyTransfer: {},
				EnergyTransferAll: {},
				ListOwnEnergyTransferOffer: {},
				ListOwnEnergyTransfer: {},
				ListOwnerEnergyTransfer: {},
				
				_Structure: {
						EnergyTransfer: getStructure(EnergyTransfer.fromPartial({})),
						EnergyTransferOffer: getStructure(EnergyTransferOffer.fromPartial({})),
						EnergyTransferCreatedEvent: getStructure(EnergyTransferCreatedEvent.fromPartial({})),
						Location: getStructure(Location.fromPartial({})),
						Params: getStructure(Params.fromPartial({})),
						
		},
		_Registry: registry,
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(JSON.stringify(subscription))
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(JSON.stringify(subscription))
		}
	},
	getters: {
				getParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Params[JSON.stringify(params)] ?? {}
		},
				getEnergyTransferOffer: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.EnergyTransferOffer[JSON.stringify(params)] ?? {}
		},
				getEnergyTransferOfferAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.EnergyTransferOfferAll[JSON.stringify(params)] ?? {}
		},
				getEnergyTransfer: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.EnergyTransfer[JSON.stringify(params)] ?? {}
		},
				getEnergyTransferAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.EnergyTransferAll[JSON.stringify(params)] ?? {}
		},
				getListOwnEnergyTransferOffer: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ListOwnEnergyTransferOffer[JSON.stringify(params)] ?? {}
		},
				getListOwnEnergyTransfer: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ListOwnEnergyTransfer[JSON.stringify(params)] ?? {}
		},
				getListOwnerEnergyTransfer: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ListOwnerEnergyTransfer[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		},
		getRegistry: (state) => {
			return state._Registry
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: chain4energy.cfeev.cfeev initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					const sub=JSON.parse(subscription)
					await dispatch(sub.action, sub.payload)
				}catch(e) {
					throw new Error('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.Chain4EnergyCfeevCfeev.query.queryParams()).data
				
					
				commit('QUERY', { query: 'Params', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: {...key},query }})
				return getters['getParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryParams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryEnergyTransferOffer({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.Chain4EnergyCfeevCfeev.query.queryEnergyTransferOffer( key.id)).data
				
					
				commit('QUERY', { query: 'EnergyTransferOffer', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryEnergyTransferOffer', payload: { options: { all }, params: {...key},query }})
				return getters['getEnergyTransferOffer']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryEnergyTransferOffer API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryEnergyTransferOfferAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.Chain4EnergyCfeevCfeev.query.queryEnergyTransferOfferAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.Chain4EnergyCfeevCfeev.query.queryEnergyTransferOfferAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'EnergyTransferOfferAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryEnergyTransferOfferAll', payload: { options: { all }, params: {...key},query }})
				return getters['getEnergyTransferOfferAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryEnergyTransferOfferAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryEnergyTransfer({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.Chain4EnergyCfeevCfeev.query.queryEnergyTransfer( key.id)).data
				
					
				commit('QUERY', { query: 'EnergyTransfer', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryEnergyTransfer', payload: { options: { all }, params: {...key},query }})
				return getters['getEnergyTransfer']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryEnergyTransfer API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryEnergyTransferAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.Chain4EnergyCfeevCfeev.query.queryEnergyTransferAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.Chain4EnergyCfeevCfeev.query.queryEnergyTransferAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'EnergyTransferAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryEnergyTransferAll', payload: { options: { all }, params: {...key},query }})
				return getters['getEnergyTransferAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryEnergyTransferAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryListOwnEnergyTransferOffer({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.Chain4EnergyCfeevCfeev.query.queryListOwnEnergyTransferOffer( key.ownerAccAddress, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.Chain4EnergyCfeevCfeev.query.queryListOwnEnergyTransferOffer( key.ownerAccAddress, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ListOwnEnergyTransferOffer', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryListOwnEnergyTransferOffer', payload: { options: { all }, params: {...key},query }})
				return getters['getListOwnEnergyTransferOffer']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryListOwnEnergyTransferOffer API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryListOwnEnergyTransfer({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.Chain4EnergyCfeevCfeev.query.queryListOwnEnergyTransfer( key.driverAccAddress, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.Chain4EnergyCfeevCfeev.query.queryListOwnEnergyTransfer( key.driverAccAddress, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ListOwnEnergyTransfer', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryListOwnEnergyTransfer', payload: { options: { all }, params: {...key},query }})
				return getters['getListOwnEnergyTransfer']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryListOwnEnergyTransfer API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryListOwnerEnergyTransfer({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.Chain4EnergyCfeevCfeev.query.queryListOwnerEnergyTransfer( key.ownerAccAddress, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.Chain4EnergyCfeevCfeev.query.queryListOwnerEnergyTransfer( key.ownerAccAddress, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ListOwnerEnergyTransfer', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryListOwnerEnergyTransfer', payload: { options: { all }, params: {...key},query }})
				return getters['getListOwnerEnergyTransfer']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryListOwnerEnergyTransfer API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgRemoveTransfer({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.Chain4EnergyCfeevCfeev.tx.sendMsgRemoveTransfer({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRemoveTransfer:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgRemoveTransfer:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgPublishEnergyTransferOffer({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.Chain4EnergyCfeevCfeev.tx.sendMsgPublishEnergyTransferOffer({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgPublishEnergyTransferOffer:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgPublishEnergyTransferOffer:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgEnergyTransferStartedRequest({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.Chain4EnergyCfeevCfeev.tx.sendMsgEnergyTransferStartedRequest({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgEnergyTransferStartedRequest:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgEnergyTransferStartedRequest:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgEnergyTransferCompletedRequest({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.Chain4EnergyCfeevCfeev.tx.sendMsgEnergyTransferCompletedRequest({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgEnergyTransferCompletedRequest:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgEnergyTransferCompletedRequest:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgStartEnergyTransferRequest({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.Chain4EnergyCfeevCfeev.tx.sendMsgStartEnergyTransferRequest({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgStartEnergyTransferRequest:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgStartEnergyTransferRequest:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCancelEnergyTransferRequest({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.Chain4EnergyCfeevCfeev.tx.sendMsgCancelEnergyTransferRequest({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCancelEnergyTransferRequest:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCancelEnergyTransferRequest:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgRemoveEnergyOffer({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.Chain4EnergyCfeevCfeev.tx.sendMsgRemoveEnergyOffer({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRemoveEnergyOffer:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgRemoveEnergyOffer:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgRemoveTransfer({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.Chain4EnergyCfeevCfeev.tx.msgRemoveTransfer({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRemoveTransfer:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgRemoveTransfer:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgPublishEnergyTransferOffer({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.Chain4EnergyCfeevCfeev.tx.msgPublishEnergyTransferOffer({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgPublishEnergyTransferOffer:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgPublishEnergyTransferOffer:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgEnergyTransferStartedRequest({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.Chain4EnergyCfeevCfeev.tx.msgEnergyTransferStartedRequest({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgEnergyTransferStartedRequest:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgEnergyTransferStartedRequest:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgEnergyTransferCompletedRequest({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.Chain4EnergyCfeevCfeev.tx.msgEnergyTransferCompletedRequest({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgEnergyTransferCompletedRequest:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgEnergyTransferCompletedRequest:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgStartEnergyTransferRequest({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.Chain4EnergyCfeevCfeev.tx.msgStartEnergyTransferRequest({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgStartEnergyTransferRequest:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgStartEnergyTransferRequest:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCancelEnergyTransferRequest({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.Chain4EnergyCfeevCfeev.tx.msgCancelEnergyTransferRequest({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCancelEnergyTransferRequest:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCancelEnergyTransferRequest:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgRemoveEnergyOffer({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.Chain4EnergyCfeevCfeev.tx.msgRemoveEnergyOffer({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRemoveEnergyOffer:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgRemoveEnergyOffer:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}
