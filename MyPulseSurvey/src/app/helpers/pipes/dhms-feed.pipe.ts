import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';

@Pipe({
  name: 'dhmsFeed'
})
export class DhmsFeedPipe implements PipeTransform {
  constructor(
    private translateService: TranslateService,
 
  ) { }


  transform(value: any, ...args: unknown[]): unknown {
    var date1: any = new Date( moment.utc(value).local().format());
    var date2: any = new Date(moment().format());


    let diffMs = (date2 - date1); // milliseconds
    let diffDays = Math.floor(diffMs / 86400000); // days
    let diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); //minutes


    let diff = {
      seconds: 0,
      minutes: diffMins,
      hours: diffHrs,
      days: diffDays,
    };

    if (diffDays > 0)
      return `${this.translateService.instant('feed.about')} ${diffDays}  ${this.translateService.instant('feed.day')} ${this.translateService.instant('feed.ago')}`;
    if (diffHrs > 0)
      return `${this.translateService.instant('feed.about')} ${diffHrs} ${this.translateService.instant('feed.hour')} ${this.translateService.instant('feed.ago')}`;
    if (diffMins > 0)
      return `${this.translateService.instant('feed.about')} ${diffMins} ${this.translateService.instant('feed.minute')} ${this.translateService.instant('feed.ago')}`;
    else
      return '';
  }

}
