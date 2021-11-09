import { PaginationFilter } from "./pagination-filter";

export class NotificationListFilter extends PaginationFilter{

    role:string;
    receieveId:string;
    userId:string;
    notificationType:number;
    states:Array<number>=[];
   
}