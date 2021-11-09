import { PaginationFilter } from "./pagination-filter";

export class CommentListFilter extends PaginationFilter{
    offerId:string;
    userId:string;
    states:Array<number>=[];
}