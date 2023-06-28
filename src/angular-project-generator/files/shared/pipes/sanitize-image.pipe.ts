import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeImage'
})
export class SanitizeImagePipe implements PipeTransform {

  constructor(
    protected _domSanitizationService: DomSanitizer
  ) { }

  public transform(value: any): SafeUrl {
    return this._domSanitizationService.bypassSecurityTrustUrl(`data: ${value.imageType ? value.imageType : 'image/png'};base64,${value.image}`);
  }
}
