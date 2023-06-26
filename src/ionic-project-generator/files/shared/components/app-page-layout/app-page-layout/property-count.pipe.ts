import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'propertyCount' })
export class PropertyCountPipe implements PipeTransform {
  transform(obj: { [key: string]: any }, ignoreProps: string[] = []): number {
    if (!obj) return 0;
    let count = 0;
    for (const prop in obj) {
      if (ignoreProps.includes(prop)) continue;
      if (obj[prop] !== null && obj[prop] !== undefined && obj[prop] !== '') {
        count++;
      }
    }
    return count;
  }
}
