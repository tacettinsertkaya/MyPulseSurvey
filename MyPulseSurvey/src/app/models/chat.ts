import { Offer } from "./Offer";
import { UserResponse } from "./response/user-response";

export class Chat{
    id:string;
    companyId:string;
    offerId:string;
    senderId:string;
    receieveId:string;
    lastSeen:Date;
    lastMessageId:string;
    isAnswered:boolean=false;
    userId:string;
    createDate:Date;
    offer:Offer;
    receieveFullName:string;
    senderFullName:string;
   
}