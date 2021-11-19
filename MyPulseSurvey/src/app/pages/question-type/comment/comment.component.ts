import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { bounceOutLeftOnLeaveAnimation, fadeInRightOnEnterAnimation } from 'angular-animations';
import { SurveyAnswerCreate } from 'src/app/models/entity/survey/survey-answer-create';
import { SurveyQuestion } from 'src/app/models/entity/survey/survey-question';
import { SurveyQuestionOption } from 'src/app/models/entity/survey/survey-question-option';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  animations: [
    fadeInRightOnEnterAnimation({ anchor: 'enter', duration: 1000, delay: 100, translate: '30px' }),
    bounceOutLeftOnLeaveAnimation({ anchor: 'leave', duration: 500, delay: 200, translate: '40px' })
  ]
})
export class CommentComponent implements OnInit {
  @Input() currentQuestion: SurveyQuestion | null = null;
  comment: string = '';

  @Output() answerEvent = new EventEmitter<SurveyAnswerCreate>();



  constructor() { }

  ngOnInit(): void {
  }

  selectOption(question: SurveyQuestion, option: SurveyQuestionOption) {
 
  }

  addComment(event: any,question: SurveyQuestion) {
    let val=event.target.value;
    this.comment=val;

   
 
  }

  submitComment(question: SurveyQuestion){
    if (question) {
      let data = new SurveyAnswerCreate();
      data.surveyId = question.surveyId ? question.surveyId : "";
      data.surveyQuestionId=question.id?question.id:"";
      data.answer=this.comment;

      this.submitQuestion(data);
    }
  }


  submitQuestion(answer: SurveyAnswerCreate) {

    this.answerEvent.emit(answer);

  }

}
