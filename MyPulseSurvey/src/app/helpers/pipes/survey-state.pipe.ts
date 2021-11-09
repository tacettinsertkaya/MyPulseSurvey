import { Pipe, PipeTransform } from '@angular/core';
import { SURVEY_STATE_DATA } from 'src/app/models/enums/survey-state';

@Pipe({
  name: 'surveyState'
})
export class SurveyStatePipe implements PipeTransform {
   data=SURVEY_STATE_DATA;

  transform(value: number): string {
    console.log("data",this.data)
    console.log("value",value)

     let x=this.data.find(p=>p.value==value);

     console.log("x",x)
     if(x)
       return x.text;
      
    return '';
  }

}
