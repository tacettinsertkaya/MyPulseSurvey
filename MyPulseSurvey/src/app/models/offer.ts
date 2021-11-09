import { Base } from "./base";

export class Offer extends Base {

    title: string;
    description: string;
    contribution: string;
    state: number;
    avgRate:number;
    rateCount:number;
    legationReason:string;
    coordinatorReason:string;
    totalRateCount:number;
    dueDate:Date;
    companyId:string;
    ownerName:string;
    isAnonymous:boolean=false;

    deleteEmployee:boolean=false;
    deleteConcilor:boolean=false;
    deleteLegation:boolean=false;
    deleteCoordinator:boolean=false;
    deleteManager:boolean=false;
}