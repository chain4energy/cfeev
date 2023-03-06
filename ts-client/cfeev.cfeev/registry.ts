import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgEnergyTransferStartedRequest } from "./types/cfeev/cfeev/tx";
import { MsgPublishEnergyTransferOffer } from "./types/cfeev/cfeev/tx";
import { MsgStartEnergyTransferRequest } from "./types/cfeev/cfeev/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cfeev.cfeev.MsgEnergyTransferStartedRequest", MsgEnergyTransferStartedRequest],
    ["/cfeev.cfeev.MsgPublishEnergyTransferOffer", MsgPublishEnergyTransferOffer],
    ["/cfeev.cfeev.MsgStartEnergyTransferRequest", MsgStartEnergyTransferRequest],
    
];

export { msgTypes }