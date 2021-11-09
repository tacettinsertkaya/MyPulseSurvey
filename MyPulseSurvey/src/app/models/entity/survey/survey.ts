import { Base } from "src/app/models/base";
import { SURVEY_STATE } from "../../enums/survey-state";
import { SurveyQuestion } from "./survey-question";

export class Survey  extends Base{
    title:string='';
    description:string='';
    startDate:Date=new Date();
    endDate:Date=new Date();
    isShowUserInfo:boolean=false;
    state:number=SURVEY_STATE.SendVoting;
    surveyQuestions:Array<SurveyQuestion>=[];
}