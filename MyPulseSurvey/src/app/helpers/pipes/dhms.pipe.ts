import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'dhms'
})
export class DhmsPipe implements PipeTransform {

  constructor(
    private translate: TranslateService,
 
  ) { }


  transform(value: any, ...args: unknown[]): unknown {
    let diffMin=value;
    let diffDays = Math.floor(diffMin / 1440); // days
    let diffHrs = Math.floor((diffMin % 1440) / 60); // hours
    let diffMins = Math.round(((diffMin % 1440) % 60));
   
    let timeData='';
    if(diffDays>0)
      timeData+= `${diffDays} ${this.translate.instant('common.day')} `
    if(diffHrs)
      timeData+= `${diffHrs} ${this.translate.instant('common.hour')} `
    if(diffMins)
      timeData+= `${diffMins} ${this.translate.instant('common.minute')} `
 
     return timeData;
  }

}
