import { Base } from "../../base";
import { FieldType } from "../../enums/field-type";
import { GroupUser } from "../group-user/group-user";

export class Group extends Base{
   groupName:string='';
   groupUsers:Array<GroupUser>=[];

}