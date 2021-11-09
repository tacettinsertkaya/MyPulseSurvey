import { Base } from "src/app/models/base";
import { QUESTION_TYPE } from "src/app/models/enums/question-type";
import { Survey } from "./survey";
import { SurveyQuestionOption } from "./survey-question-option";

export class SurveyQuestion extends Base{
    surveyId:string | null=null;
    title:string='';
    description:string='';
    type:number =QUESTION_TYPE.NONE;
    isRequired:boolean = false;
    optionRight:number= 1;
    order:number=0;
    survey:Survey | null=null;
    surveyQuestionOptions:Array<SurveyQuestionOption>=[];
}