import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { bounceOutDownOnLeaveAnimation, bounceOutLeftOnLeaveAnimation, bounceOutRightOnLeaveAnimation, bounceOutUpOnLeaveAnimation, fadeInDownOnEnterAnimation, fadeInLeftOnEnterAnimation, fadeInRightOnEnterAnimation, fadeInUpOnEnterAnimation } from 'angular-animations';
import { SurveyUser } from 'src/app/models/entity/survey/survey-user';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-complete-survey',
  templateUrl: './complete-survey.component.html',
  styleUrls: ['./complete-survey.component.scss'],
  animations: [
    fadeInLeftOnEnterAnimation({ anchor: 'enter', duration: 1000, delay: 100, translate: '30px' }),
    bounceOutRightOnLeaveAnimation({ anchor: 'leave', duration: 500, delay: 200, translate: '40px' })
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompleteSurveyComponent implements OnInit {
  userId: string = '';
  startDate:Date | null=null;
  finishDate:Date | null=null;

  constructor(
    private surveyService: SurveyService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr:ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let surveyId = params['surveyId'];
      this.userId = params['userId'];
      console.log("surveyId",surveyId)
      console.log(" this.userId", this.userId)
      if (surveyId) {
        let surveyUser=new SurveyUser();
        surveyUser.surveyId=surveyId;
        surveyUser.applicationUserId=this.userId;

        this.getSurveyCompleted(surveyUser);
      }

    
      this.cdr.markForCheck();
    })
  }

  getSurveyCompleted(data:SurveyUser) {
    this.surveyService.getSurveyCompleted(data).subscribe(res => {
        console.log("res-completed",res);
        this.startDate=res.data.startDate;
        this.finishDate=res.data.finishDate;
              this.cdr.markForCheck();

    });
  }
}
