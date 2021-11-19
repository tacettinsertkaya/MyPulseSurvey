import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'dateago'
})
export class DateagoPipe implements PipeTransform {

  transform(value: any, value2: Date): any {
    if (value) {
      const seconds = Math.floor((+new Date(value) - +new Date(value2)) / 1000);

      const intervals: any = {
        'year': 31536000,
        'month': 2592000,
        'week': 604800,
        'day': 86400,
        'hour': 3600,
        'minute': 60,
        'second': 1
      };
      let counter;
      for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i]);
        if (counter > 0)
          return counter + ' ' + i + ' '; // singular (1 day ago)

      }
    }
    return value;
  }
}

