import { FieldType } from "../../enums/field-type";
import { FieldGroup } from "./field-group";

export class FieldItem{

    id:string='';
    fieldGroupId :string='';
    fieldGroup:FieldGroup | null=null;

    fieldItemName:string='';
    fieldType:number =FieldType.DEPARTMENT;
    order:number=0;
    
   
}