import { PaginationFilter } from "./pagination-filter";

export class EvaluationCriteriaListFilter extends PaginationFilter{
    id: string;
    status?:boolean;
    companyId:string;
}