import { animate, style, transition, trigger } from '@angular/animations';
import { templateJitUrl } from '@angular/compiler';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { bounceOutLeftOnLeaveAnimation, fadeInRightOnEnterAnimation } from 'angular-animations';
import { SurveyAnswerCreate } from 'src/app/models/entity/survey/survey-answer-create';
import { SurveyQuestion } from 'src/app/models/entity/survey/survey-question';
import { SurveyUser } from 'src/app/models/entity/survey/survey-user';
import { QUESTION_TYPE } from 'src/app/models/enums/question-type';
import { AlertifyService } from 'src/app/services/alertify.service';
import { SharedService } from 'src/app/services/shared.service';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
  animations: [
    fadeInRightOnEnterAnimation({ anchor: 'enter', duration: 1000, delay: 100, translate: '30px' }),
    bounceOutLeftOnLeaveAnimation({ anchor: 'leave', duration: 500, delay: 200, translate: '40px' })
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SurveyComponent implements OnInit {
  question: number = 1;
  totalQuestion: number = 5;
  questionId: string = '';
  currentQuestion: SurveyQuestion | null = null;
  animationState = true;
  isFinish: boolean = false;
  userId:string='';

  public get question_type(): typeof QUESTION_TYPE {
    return QUESTION_TYPE;
  }


  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router,
    private alertify: AlertifyService,
    private surveyService: SurveyService,
    private sharedService: SharedService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      let questionId = params['questionId'];
      this.userId = params['userId'];

      if (questionId) {
        this.questionId = questionId;
        this.getQuestion(questionId);
      }

      if (!questionId)
        this.router.navigate(['/notfound'])

      this.cdr.markForCheck();
    })
  }

  getQuestion(questionId: string) {
    let questions = this.sharedService.surveyValue.surveyQuestions;
    let question = questions.find(x => x.id === questionId);

    if (question) {
      this.question = questions.indexOf(question);

      this.currentQuestion = question;
      console.log("  this.currentQuestion",  this.currentQuestion)
      this.totalQuestion = questions.length;
      this.cdr.markForCheck();
    }
    else
      this.alertify.error("Question not found", "");
  }


  submitAnswer(answer: any) {
   
    this.surveyService.createQuestionAnswer(answer).subscribe((res) => {

      this.nextQuestion();

    })
  }

  surveyFinish() {

    if (this.currentQuestion) {
      let surveyUser = new SurveyUser();
      surveyUser.surveyId = this.currentQuestion.surveyId?this.currentQuestion.surveyId:'';
      surveyUser.applicationUserId=this.userId;
      surveyUser.finishDate=new Date();
      surveyUser.isFinish=true;
      
      this.surveyService.createSurveyFinish(surveyUser).subscribe(res => {
        this.router.navigate(['/completed', this.currentQuestion?.surveyId,this.userId])

      });
    }
  }



  nextQuestion() {
    if (this.currentQuestion) {
      let questions = this.sharedService.surveyValue.surveyQuestions;
      let exist = questions.find(x => x.id == this.currentQuestion?.id);

      if (exist) {
        const currentIndex = questions.indexOf(exist);

        if (currentIndex > -1 && currentIndex < questions.length - 1) {
          const nextIndex = (currentIndex + 1) % questions.length;

          let nextQuestion = questions[nextIndex];
          this.router.navigate(['/survey', nextQuestion.id,this.userId])
          this.cdr.markForCheck();
        }
        else {
          this.surveyFinish();
        }
      }
    }
  }

  lastQuestionCheck() {
    if (this.currentQuestion) {
      let questions = this.sharedService.surveyValue.surveyQuestions;
      let exist = questions.find(x => x.id == this.currentQuestion?.id);
      if (exist) {
        const currentIndex = questions.indexOf(exist);

        if (currentIndex < questions.length - 1)
          return false;
        else
          return true;

      }
      else
        return false;

    }
    else {
      return false;
    }

  }



  prevQuestion() {
    if (this.currentQuestion) {
      let questions = this.sharedService.surveyValue.surveyQuestions;
      let exist = questions.find(x => x.id == this.currentQuestion?.id);
      if (exist) {
        let currentIndex = questions.indexOf(exist);

        if (currentIndex > -1) {

          if (currentIndex == 0)
            currentIndex = 1;

          const nextIndex = (currentIndex - 1) % questions.length;

          let prevQuestion = questions[nextIndex];
          this.router.navigate(['/survey', prevQuestion.id,this.userId])
          this.cdr.markForCheck();
        }
      }
    }

  }



}
