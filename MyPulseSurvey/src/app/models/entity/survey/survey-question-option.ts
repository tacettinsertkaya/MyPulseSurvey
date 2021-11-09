import { Base } from "src/app/models/base";
import { QUESTION_TYPE } from "src/app/models/enums/question-type";
import { SurveyQuestion } from "./survey-question";

export class SurveyQuestionOption extends Base{
    surveyQuestionId:string | null=null;
    type:number = QUESTION_TYPE.SELECT;
    title:string='';
    description:string='';
    SurveyQuestion:SurveyQuestion | null=null;

}