import { Survey } from "./survey";
import { SurveyQuestion } from "./survey-question";

export class SurveyCreate{
    survey:Survey=new Survey();
    surveyQuestions:Array<SurveyQuestion>=[];
    userIds:Array<string>=[];
}