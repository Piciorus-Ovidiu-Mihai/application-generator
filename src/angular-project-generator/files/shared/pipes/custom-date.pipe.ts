import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'customDate' })
export class CustomDatePipe implements PipeTransform {
  transform(value: Date, format: string = 'yyyy-MM-dd'): string {
    return this.formatDate(value, format);
  }

  private formatDate(date: Date, format: string): string {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return format
      .replace('yyyy', year.toString())
      .replace('MM', this.padZero(month))
      .replace('dd', this.padZero(day))
      .replace('HH', this.padZero(hours))
      .replace('mm', this.padZero(minutes))
      .replace('ss', this.padZero(seconds));
  }

  private padZero(value: number): string {
    return value.toString().padStart(2, '0');
  }
}
