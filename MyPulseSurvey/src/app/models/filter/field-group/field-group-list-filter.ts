import { PaginationFilter } from "../pagination-filter";

export class FieldGroupListFilter extends PaginationFilter{
    fieldType : number = 0;
    fieldName: string = '';
    status:boolean=false;
}