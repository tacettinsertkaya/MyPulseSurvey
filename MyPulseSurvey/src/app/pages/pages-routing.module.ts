import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitPageComponent } from './init-page/init-page.component';
import { MessagesComponent } from './messages/messages.component';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [
  {
    path:'',
    component:InitPageComponent
  },
  {
    path:'init',
    pathMatch:'full',
    redirectTo:''
  },
  {
    path:'survey',
    component:SurveyComponent
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
