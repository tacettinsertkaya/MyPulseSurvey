import { PaginationFilter } from "./pagination-filter";

export class OfferListFilter extends PaginationFilter{
    states:Array<number>=[];
    companyId:string;
    councilorId:string;

    deleteEmployee:boolean=false;
    deleteConcilor:boolean=false;
    deleteLegation:boolean=false;
    deleteCoordinator:boolean=false;
    userId:string;
    searchParams:string;
}