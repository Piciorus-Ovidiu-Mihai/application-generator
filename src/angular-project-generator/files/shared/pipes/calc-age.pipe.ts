import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';


@Pipe({
  name: 'age'
})
export class CalcAgePipe implements PipeTransform {

  public transform = (dateOfBirth: string, props?: { granularity?: 'day' | 'week' | 'month' | 'year', base?: number }): number => {
    return dateOfBirth ? (dayjs().diff(dateOfBirth, (props?.granularity || 'day')) + (props?.base ?? 0)) : undefined;
  }

}
