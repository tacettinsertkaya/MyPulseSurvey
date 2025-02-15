import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';
import { Survey } from '../models/entity/survey/survey';
import { SurveyAnswerCreate } from '../models/entity/survey/survey-answer-create';
import { SurveyCreate } from '../models/entity/survey/survey-create';
import { SurveyUser } from '../models/entity/survey/survey-user';
import { SurveyFilter } from '../models/filter/survey/survey-filter';
import { SurveyListFilter } from '../models/filter/survey/survey-list-filter';
import { PaginatedResponse } from '../models/response/paginated-reponse';
import { ResponseData } from '../models/response/response-data';

import { BaseService } from './base.service';
import { EndPoints } from './end-points';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient, private baseService: BaseService) {}


  getAllSurvey(filter:SurveyListFilter): Observable<PaginatedResponse<any>> {
    return this.baseService.listpost<any>(
      filter,
      environment.serverBaseUrl,
      EndPoints.SURVEY+'/GetListByFilterAsync'
    );
  }


  getUserSurveyByFilterAsync(filter:SurveyFilter): Observable<ResponseData<Survey>> {
    return this.baseService.post<Survey>(
      filter,
      environment.serverBaseUrl,
      EndPoints.SURVEY+'/GetUserSurveyByFilterAsync'
    );
  }



  create(surveyCreate: SurveyCreate) :Observable<ResponseData<SurveyCreate>> {
   
    return this.baseService.post<SurveyCreate>(
      surveyCreate,
      environment.serverBaseUrl,
      EndPoints.SURVEY+'/Create'
    );
  }

  createQuestionAnswer(surveyAnswerCreate: SurveyAnswerCreate) :Observable<ResponseData<SurveyAnswerCreate>> {
   
    return this.baseService.post<SurveyAnswerCreate>(
      surveyAnswerCreate,
      environment.serverBaseUrl,
      EndPoints.SURVEY+'/CreateQuestionAnswer'
    );
  }


  createSurveyStart(surveyUser:SurveyUser){
    return this.baseService.post<SurveyUser>(
      surveyUser,
      environment.serverBaseUrl,
      EndPoints.SURVEY+'/SurveyStart'
    );
  }

  createSurveyFinish(surveyUser:SurveyUser){
    return this.baseService.post<SurveyUser>(
      surveyUser,
      environment.serverBaseUrl,
      EndPoints.SURVEY+'/SurveyFinish'
    );
  }


  getSurveyCompleted(surveyUser:SurveyUser){
    return this.baseService.post<SurveyUser>(
      surveyUser,
      environment.serverBaseUrl,
      EndPoints.SURVEY+'/GetSurveyCompleted'
    );
  }

  delete(id: any): Observable<ResponseData<any>> {
   
    return this.baseService.get(
      id,
      environment.serverBaseUrl,
      EndPoints.SURVEY + "/Delete"
    );
  }


}
