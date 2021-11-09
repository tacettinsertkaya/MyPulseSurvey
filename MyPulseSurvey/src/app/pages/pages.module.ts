import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from '../layouts/home/home.component';

import { PagesRoutingModule } from './pages-routing.module';

import { InitPageComponent } from './init-page/init-page.component';
import { MultiSelectionComponent } from './question-type/multi-selection/multi-selection.component';
import { RateComponent } from './question-type/rate/rate.component';
import { EmotionComponent } from './question-type/emotion/emotion.component';
import { SelectionComponent } from './question-type/selection/selection.component';
import { CommentComponent } from './question-type/comment/comment.component';
import { SurveyComponent } from './survey/survey.component';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages/messages.component';
import { SurveyNotFoundComponent } from './error-pages/survey-not-found/survey-not-found.component';



@NgModule({
  declarations: [
 
    RateComponent,
    EmotionComponent,
    SelectionComponent,
    MultiSelectionComponent,
    CommentComponent,
    InitPageComponent,
    SurveyComponent,
    MessagesComponent,
    SurveyNotFoundComponent
    
    ],
  imports: [
    PagesRoutingModule,
    CommonModule,
  ]
})
export class PagesModule { }
