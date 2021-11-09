import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyQuestion } from 'src/app/models/entity/survey/survey-question';
import { QUESTION_TYPE } from 'src/app/models/enums/question-type';
import { AlertifyService } from 'src/app/services/alertify.service';
import { SharedService } from 'src/app/services/shared.service';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SurveyComponent implements OnInit {
  question: number = 1;
  totalQuestion: number = 5;
  questionId: string = '';
  currentQuestion: SurveyQuestion | null = null;

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
      this.totalQuestion = questions.length;
      this.cdr.markForCheck();
    }
    else
      this.alertify.error("Question not found", "");
  }



  nextQuestion() {
    if (this.currentQuestion) {
      let questions = this.sharedService.surveyValue.surveyQuestions;
      let exist = questions.find(x => x.id == this.currentQuestion?.id);
      if (exist) {
        const currentIndex = questions.indexOf(exist);
       
        if (currentIndex > -1) {
          const nextIndex = (currentIndex + 1) % questions.length;

          let nextQuestion = questions[nextIndex];
          this.router.navigate(['/survey', nextQuestion.id])
          this.cdr.markForCheck();
        }
      }
    }
  }



  prevQuestion() {
    if (this.currentQuestion) {
      let questions = this.sharedService.surveyValue.surveyQuestions;
      let exist = questions.find(x => x.id == this.currentQuestion?.id);
      if (exist) {
        let currentIndex = questions.indexOf(exist);
      
        if (currentIndex > -1) {
          
          if(currentIndex==0)
             currentIndex=1;

          const nextIndex = (currentIndex-1) % questions.length;

          let nextQuestion = questions[nextIndex];
          this.router.navigate(['/survey', nextQuestion.id])
          this.cdr.markForCheck();
        }
      }
    }

  }


}
