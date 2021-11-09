import { PaginationFilter } from "../pagination-filter";

export class SurveyListFilter extends PaginationFilter{

    title:string='';
    description:string='';
    startDate:Date=new Date();
    endDate:Date=new Date();
}