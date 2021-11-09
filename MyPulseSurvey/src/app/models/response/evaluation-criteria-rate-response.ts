import { EvaluationCriteriaRate } from "../evaluation-criteria-rate";
import { EvaluationCriteriaRateDetail } from "../evaluation-criteria-rate-detail";

export class EvaluationCriteriaRateResponse{
  
    evaluationCriteriaRate:EvaluationCriteriaRate=new EvaluationCriteriaRate();
    details:Array<EvaluationCriteriaRateDetail>=[];
    companyId:string='';
}