import { MessageType } from "./enums/message-type";

export class ChatMessage{
    id:string;
    chatId:string;
    senderId:string;
    receieveId:string;
    content:string;
    isType:number=MessageType.Sender;
    isRead:boolean=false;
    userId:string;
    createDate:Date;
    status:boolean;
  
}