import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { bounceOutLeftOnLeaveAnimation, fadeInRightOnEnterAnimation } from 'angular-animations';
import { SurveyAnswerCreate } from 'src/app/models/entity/survey/survey-answer-create';
import { SurveyQuestion } from 'src/app/models/entity/survey/survey-question';
import { SurveyQuestionOption } from 'src/app/models/entity/survey/survey-question-option';

@Component({
  selector: 'app-multi-selection',
  templateUrl: './multi-selection.component.html',
  styleUrls: ['./multi-selection.component.scss'],
  animations: [
    fadeInRightOnEnterAnimation({ anchor: 'enter', duration: 1000, delay: 100, translate: '30px' }),
    bounceOutLeftOnLeaveAnimation({ anchor: 'leave', duration: 500, delay: 200, translate: '40px' })
  ]
})
export class MultiSelectionComponent implements OnInit {
  @Input() currentQuestion: SurveyQuestion | null = null;
  comment: string = '';

  @Output() answerEvent = new EventEmitter<SurveyAnswerCreate>();



  constructor() { }

  ngOnInit(): void {
  }

  selectOption(question: SurveyQuestion, option: SurveyQuestionOption) {
 
    if (question) {
      let data = new SurveyAnswerCreate();
      data.surveyId = question.surveyId ? question.surveyId : "";
      data.surveyQuestionId=question.id?question.id:"";
      data.answer=option.title;

      this.submitQuestion(data);
    }
  }

  addComment(event: any) {
    let val = event.target.value;
    this.comment=val;
  }


  submitQuestion(answer: SurveyAnswerCreate) {

    this.answerEvent.emit(answer);

  }

}
