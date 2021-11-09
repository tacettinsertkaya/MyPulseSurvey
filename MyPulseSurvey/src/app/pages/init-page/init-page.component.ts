import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Survey } from 'src/app/models/entity/survey/survey';
import { SurveyFilter } from 'src/app/models/filter/survey/survey-filter';
import { SurveyListFilter } from 'src/app/models/filter/survey/survey-list-filter';
import { AlertifyService } from 'src/app/services/alertify.service';
import { SharedService } from 'src/app/services/shared.service';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-init-page',
  templateUrl: './init-page.component.html',
  styleUrls: ['./init-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InitPageComponent implements OnInit {
  surveyId: string = '';
  userId: string = '';
  survey: Survey | null = null;
  isSurvey: boolean = true;
  firstQuestionId: string = '';

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

      let surveyId = params['surveyId'];
      let userId = params['userId'];

      if (surveyId)
        this.surveyId = surveyId;

      if (userId)
        this.userId = userId;

      if (!surveyId || !userId) {
        this.isSurvey = false;
        this.router.navigate(['/notfound'])
      }


      if (this.surveyId && this.userId)
        this.getSurvey();
    })
  }


  getSurvey() {
    let filter = new SurveyFilter();
    filter.Id = this.surveyId;

    this.surveyService.getUserSurveyByFilterAsync(filter).subscribe(res => {
      if (res.succeeded) {
        this.survey = res.data;
        this.sharedService.surveySetValue(this.survey);
        let id = this.survey.surveyQuestions[0].id;

        if (id)
          this.firstQuestionId = id;
        else
          this.alertify.error("Anket bulunamadı.","")

        this.cdr.markForCheck();
      }
    });
  }

}
