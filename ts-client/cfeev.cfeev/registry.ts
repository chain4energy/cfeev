import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCancelEnergyTransferRequest } from "./types/cfeev/cfeev/tx";
import { MsgRemoveEnergyOffer } from "./types/cfeev/cfeev/tx";
import { MsgPublishEnergyTransferOffer } from "./types/cfeev/cfeev/tx";
import { MsgEnergyTransferStartedRequest } from "./types/cfeev/cfeev/tx";
import { MsgStartEnergyTransferRequest } from "./types/cfeev/cfeev/tx";
import { MsgEnergyTransferCompletedRequest } from "./types/cfeev/cfeev/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cfeev.cfeev.MsgCancelEnergyTransferRequest", MsgCancelEnergyTransferRequest],
    ["/cfeev.cfeev.MsgRemoveEnergyOffer", MsgRemoveEnergyOffer],
    ["/cfeev.cfeev.MsgPublishEnergyTransferOffer", MsgPublishEnergyTransferOffer],
    ["/cfeev.cfeev.MsgEnergyTransferStartedRequest", MsgEnergyTransferStartedRequest],
    ["/cfeev.cfeev.MsgStartEnergyTransferRequest", MsgStartEnergyTransferRequest],
    ["/cfeev.cfeev.MsgEnergyTransferCompletedRequest", MsgEnergyTransferCompletedRequest],
    
];

export { msgTypes }