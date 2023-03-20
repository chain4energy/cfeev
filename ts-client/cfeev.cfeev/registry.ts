import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgStartEnergyTransferRequest } from "./types/cfeev/cfeev/tx";
import { MsgCancelEnergyTransferRequest } from "./types/cfeev/cfeev/tx";
import { MsgPublishEnergyTransferOffer } from "./types/cfeev/cfeev/tx";
import { MsgEnergyTransferStartedRequest } from "./types/cfeev/cfeev/tx";
import { MsgEnergyTransferCompletedRequest } from "./types/cfeev/cfeev/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cfeev.cfeev.MsgStartEnergyTransferRequest", MsgStartEnergyTransferRequest],
    ["/cfeev.cfeev.MsgCancelEnergyTransferRequest", MsgCancelEnergyTransferRequest],
    ["/cfeev.cfeev.MsgPublishEnergyTransferOffer", MsgPublishEnergyTransferOffer],
    ["/cfeev.cfeev.MsgEnergyTransferStartedRequest", MsgEnergyTransferStartedRequest],
    ["/cfeev.cfeev.MsgEnergyTransferCompletedRequest", MsgEnergyTransferCompletedRequest],
    
];

export { msgTypes }