import { PaginationFilter } from "../pagination-filter";

export class CategoryListFilter extends PaginationFilter{
    categoryName:string='';
    companyId:string='';
    isEmptyCategory:boolean=true;
    userId:string='';
}