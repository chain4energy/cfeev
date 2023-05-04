import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgEnergyTransferCompletedRequest } from "./types/cfeev/cfeev/tx";
import { MsgPublishEnergyTransferOffer } from "./types/cfeev/cfeev/tx";
import { MsgEnergyTransferStartedRequest } from "./types/cfeev/cfeev/tx";
import { MsgRemoveEnergyOffer } from "./types/cfeev/cfeev/tx";
import { MsgCancelEnergyTransferRequest } from "./types/cfeev/cfeev/tx";
import { MsgStartEnergyTransferRequest } from "./types/cfeev/cfeev/tx";
import { MsgRemoveTransfer } from "./types/cfeev/cfeev/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/chain4energy.cfeev.cfeev.MsgEnergyTransferCompletedRequest", MsgEnergyTransferCompletedRequest],
    ["/chain4energy.cfeev.cfeev.MsgPublishEnergyTransferOffer", MsgPublishEnergyTransferOffer],
    ["/chain4energy.cfeev.cfeev.MsgEnergyTransferStartedRequest", MsgEnergyTransferStartedRequest],
    ["/chain4energy.cfeev.cfeev.MsgRemoveEnergyOffer", MsgRemoveEnergyOffer],
    ["/chain4energy.cfeev.cfeev.MsgCancelEnergyTransferRequest", MsgCancelEnergyTransferRequest],
    ["/chain4energy.cfeev.cfeev.MsgStartEnergyTransferRequest", MsgStartEnergyTransferRequest],
    ["/chain4energy.cfeev.cfeev.MsgRemoveTransfer", MsgRemoveTransfer],
    
];

export { msgTypes }