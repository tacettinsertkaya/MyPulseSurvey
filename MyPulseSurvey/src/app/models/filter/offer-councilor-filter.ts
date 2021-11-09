import { PaginationFilter } from "./pagination-filter";

export class OfferCouncilorFilter extends PaginationFilter{
    states:Array<number>=[];
    companyId:string;
    isEvaluated:boolean=false;
    councilorId:string;
    searchParams:string='';
 
}