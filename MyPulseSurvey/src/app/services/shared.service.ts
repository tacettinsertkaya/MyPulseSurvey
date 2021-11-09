import { Injectable } from "@angular/core";

import { BehaviorSubject, Observable } from "rxjs";
import { Survey } from "../models/entity/survey/survey";
import { Message } from "../models/message";



@Injectable({
  providedIn: 'root',
})
export class SharedService {

  surveySubject: BehaviorSubject<Survey> = new BehaviorSubject(new Survey());
  survey: Observable<Survey>;

  messageSource: BehaviorSubject<string> = new BehaviorSubject("");
  backUrlSubject: BehaviorSubject<string> = new BehaviorSubject("");
  backUrl: Observable<string>;


  allMessage: BehaviorSubject<Array<Message>> = new BehaviorSubject(
    new Array<Message>()
  );

  public loadingSubject: BehaviorSubject<boolean>;
  public loading: Observable<boolean>;



  messageCount: BehaviorSubject<number> = new BehaviorSubject(0);
  constructor() {

    this.loadingSubject = new BehaviorSubject<any>(false);
    this.loading = this.loadingSubject.asObservable();


    this.backUrlSubject = new BehaviorSubject<any>(false);
    this.backUrl = this.backUrlSubject.asObservable();

    this.surveySubject = new BehaviorSubject<Survey>(new Survey());
    this.survey = this.surveySubject.asObservable();


  }
  public get allMessageCountValue(): number {
    return this.messageCount.value;
  }

  // tslint:disable-next-line:typedef
  public allMessageCountSetValue(value: any) {
    this.messageCount.next(value);
  }





  //Survey
  public surveySetValue(value: any) {
    localStorage.setItem('survey', JSON.stringify(value));
    this.surveySubject.next(value);
  }


  public get surveyValue(): Survey {
    this.surveySubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('survey') || '{}'));
    return this.surveySubject.value;
  }


  //LOADER
  public loadingSetValue(value: any) {

    this.loadingSubject.next(value);
  }


  public get loadingValue(): boolean {
    return this.loadingSubject.value;
  }


  //BACK URL
  public backUrlSetValue(value: any) {

    this.backUrlSubject.next(value);
  }


  public get backUrlValue(): string {
    return this.backUrlSubject.value;
  }




  public get allMessageValue(): Array<Message> {
    return this.allMessage.value;
  }

  // tslint:disable-next-line:typedef
  public allMessageSetValue(value: any) {
    this.allMessage.next(value);
  }
  public get messageSourceValue(): string {
    return this.messageSource.value;
  }

  // tslint:disable-next-line:typedef
  public messageSourceSetValue(value: any) {
    this.messageSource.next(value);
  }





}
