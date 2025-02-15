import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompleteSurveyComponent } from './complete-survey/complete-survey.component';
import { SurveyNotFoundComponent } from './error-pages/survey-not-found/survey-not-found.component';
import { InitPageComponent } from './init-page/init-page.component';
import { MessagesComponent } from './messages/messages.component';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'notfound'
  },
  {
    path:'notfound',
    component:SurveyNotFoundComponent
  },
  {
    path:'init/:surveyId/:userId',
    pathMatch:'full',
    component:InitPageComponent
  },
  {
    path:'survey/:questionId/:userId',
    pathMatch:'full',
    component:SurveyComponent
  },
  {
    path:'completed/:surveyId/:userId',
    pathMatch:'full',
    component:CompleteSurveyComponent
  },
  {
    path:'message',
    component:MessagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
