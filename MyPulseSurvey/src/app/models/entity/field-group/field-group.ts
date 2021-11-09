import { Base } from "../../base";
import { FieldType } from "../../enums/field-type";
import { FieldItem } from "./field-item";

export class FieldGroup extends Base{
    fieldType:number = FieldType.DEPARTMENT;
    fieldGroupName:string='';
    fieldItems:Array<FieldItem>=[];

}