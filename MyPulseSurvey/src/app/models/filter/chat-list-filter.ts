import { PaginationFilter } from "./pagination-filter";

export class ChatListFilter extends PaginationFilter{
   
    id:string='';
    companyId:string='';
    senderId:string='';
    receieveId:string='';
    isAnswered:boolean=false;
  

}