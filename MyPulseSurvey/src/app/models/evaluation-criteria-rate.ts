import { Base } from "./base";
import { Offer } from "./offer";

export class EvaluationCriteriaRate extends Base{
    offerId:string;
    reason:string;
    offer:Offer;
}