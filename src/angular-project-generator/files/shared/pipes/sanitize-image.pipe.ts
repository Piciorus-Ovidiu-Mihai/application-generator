import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sanitizeImage'
})
export class SanitizeImagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
