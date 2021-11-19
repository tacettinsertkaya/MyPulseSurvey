import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCalculate'
})
export class DateCalculatePipe implements PipeTransform {

  transform(value: any, value2: any): any {
    if (value) {
      const seconds = Math.floor((+new Date(value) - +new Date(value2)) / 1000);
   
      const intervals: any = {
        'yıl': 31536000,
        'ay': 2592000,
        'hafta': 604800,
        'gün': 86400,
        'saat': 3600,
        'dakika': 60,
        'saniye': 1
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
