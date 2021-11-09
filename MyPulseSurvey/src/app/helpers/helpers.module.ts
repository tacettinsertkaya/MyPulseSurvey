import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DatemonthPipe} from './pipes/datemonth.pipe';
import {DatetimePipe} from './pipes/datetime.pipe';
import {TimePipe} from './pipes/time.pipe';
import {ValuesPipe} from './pipes/values.pipe';
import {DatePipe} from '../helpers/pipes/date.pipe';
import { DhmsPipe } from './pipes/dhms.pipe';
import { DhmsFeedPipe } from './pipes/dhms-feed.pipe';
import { DateProgressPipe } from './pipes/date-progress.pipe';
import { NumberFormatPipe } from './pipes/number-format.pipe';
import { ImageCheckPipe } from './pipes/image-check.pipe';
import { SurveyStatePipe } from './pipes/survey-state.pipe';
import { BadgeStatePipe } from './pipes/badge-state.pipe';
import { IdGeneratePipe } from './pipes/id-generate.pipe';


@NgModule({
  declarations: [
    DatePipe,
    DatemonthPipe,
    DatetimePipe,
    TimePipe,
    ValuesPipe,
    DhmsPipe,
    DhmsFeedPipe,
    DateProgressPipe,
    NumberFormatPipe,
    ImageCheckPipe,
    SurveyStatePipe,
    BadgeStatePipe,
    IdGeneratePipe,
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
    DhmsPipe,
    DhmsFeedPipe,
    DateProgressPipe,
    NumberFormatPipe,
    ImageCheckPipe,
    SurveyStatePipe,
    BadgeStatePipe,
    IdGeneratePipe

  ]
})
export class HelpersModule {
}
