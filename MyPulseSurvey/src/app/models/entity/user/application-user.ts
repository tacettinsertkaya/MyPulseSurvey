import { combineAll } from "rxjs/operators";
import { Base } from "../../base";
import { Company } from "../../company";
import { Permission } from "../../permission";
import { FieldItem } from "../field-group/field-item";

export class ApplicationUser{
    id:string='';
    name:string ='' 

    surname:string ='' 
    phone:string ='' 
    imageUrl:string ='' 
    userType:number=0;
    birthFullDate:Date=new Date();
    updateDate:Date=new Date();
    createDate:Date=new Date();
    companyId:string ='' 
    company:Company | null=null;
    confirmCode:string ='' 

    playerId:string ='' 
    status:boolean= true;

    departmantId:string ='' 
    departmant:FieldItem | null=null;

    positionId:string ='' 
    position:FieldItem | null=null;

    educationId:string ='' 
    education:FieldItem | null=null;

    genderId:string ='' 
    gender:FieldItem | null=null;

    experienceId:string ='' 
    experience:FieldItem | null=null;

    ageId:string ='' 
    age:FieldItem | null=null;

    categoryId:string ='' 
    category:FieldItem | null=null;
    
    workTypeId:string ='' 
    workType:FieldItem | null=null;

    permissions:Array<Permission>=[];

}