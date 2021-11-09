import { PaginationFilter } from "./pagination-filter";

export class ChatMessageListFilter extends PaginationFilter{
   
    chatId:string;
    senderId:string;
    receieveId:string;
    content:string;
    isRead:boolean;
  
}