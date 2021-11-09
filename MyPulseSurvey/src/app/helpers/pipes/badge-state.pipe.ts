import { Pipe, PipeTransform } from '@angular/core';
import { SURVEY_STATE_DATA } from 'src/app/models/enums/survey-state';

@Pipe({
  name: 'badgeState'
})
export class BadgeStatePipe implements PipeTransform {
  data = SURVEY_STATE_DATA;

  transform(value: number): string {


    let x = this.data.find(p => p.value == value);
   console.log("xs",x)
    if (x) {
     
        return x.color;
    }


    return '';
  }

}
