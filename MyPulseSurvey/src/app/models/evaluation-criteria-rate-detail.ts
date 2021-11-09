import { Base } from "./base";
import { EvaluationCriteria } from "./evaluation-criteria";

export class  EvaluationCriteriaRateDetail extends Base{
    evaluationCriteriaRateId:string;
    evaluationCriteriaId:string;
    rate:number;
    offerId:string;
    evaluationCriteria:EvaluationCriteria;
}