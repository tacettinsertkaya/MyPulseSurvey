import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DatemonthPipe} from './pipes/datemonth.pipe';
import {DatetimePipe} from './pipes/datetime.pipe';
import {TimePipe} from './pipes/time.pipe';
import {ValuesPipe} from './pipes/values.pipe';
import {DatePipe} from '../helpers/pipes/date.pipe';


import { DateProgressPipe } from './pipes/date-progress.pipe';
import { NumberFormatPipe } from './pipes/number-format.pipe';
import { ImageCheckPipe } from './pipes/image-check.pipe';
import { SurveyStatePipe } from './pipes/survey-state.pipe';
import { BadgeStatePipe } from './pipes/badge-state.pipe';
import { IdGeneratePipe } from './pipes/id-generate.pipe';
import { DateagoPipe } from './pipes/dateago.pipe';
import { DateCalculatePipe } from './pipes/date-calculate.pipe';


@NgModule({
  declarations: [
    DatePipe,
    DatemonthPipe,
    DatetimePipe,
    TimePipe,
    ValuesPipe,
   
    DateProgressPipe,
    NumberFormatPipe,
    ImageCheckPipe,
    SurveyStatePipe,
    BadgeStatePipe,
    IdGeneratePipe,
    DateCalculatePipe,
    DateagoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DatePipe,
    DatemonthPipe,
    DatetimePipe,
    TimePipe,
    ValuesPipe,
    
    DateProgressPipe,
    NumberFormatPipe,
    ImageCheckPipe,
    SurveyStatePipe,
    BadgeStatePipe,
    IdGeneratePipe,
    DateCalculatePipe,
    DateagoPipe
  ]
})
export class HelpersModule {
}
