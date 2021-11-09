import { PaginationFilter } from "../pagination-filter";

export class UserListFilter extends PaginationFilter{
     companyId:string | null=null;
     userName:string | null=null;
     name:string  | null=null;
     surname:string  | null=null;
     email:string  | null=null;
     filterRoles:Array<string>=[];
     status:boolean | null=null;
}