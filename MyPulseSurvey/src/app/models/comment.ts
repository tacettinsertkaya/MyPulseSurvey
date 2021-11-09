import { Base } from "./base"
import { Offer } from "./Offer";

export class Comment extends Base{
 
    offerId:string;
    commentText:string;
    state:number;
}