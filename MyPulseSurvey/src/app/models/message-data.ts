import { Base } from "./base";

export class  MessageData {

    id:string;
    userId:string;
    role:string;
    createDate:Date;
    status:boolean;
    page:string;
    companyId:string;
    entityId:string;
    content:string;
    ownerName:string;
    receieveId:string;
    isAnonymous:boolean=false;
    notificationType:number;
    state:number;
    isRead:boolean=false;
    categorys:Array<string>=[];

}
