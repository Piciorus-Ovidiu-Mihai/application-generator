import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  transform(value: string): string {
    const datePipe = new DatePipe('en-US');
    const transformedDate = datePipe.transform(value, 'MMM d yyyy');
    return transformedDate || '';
  }
}
