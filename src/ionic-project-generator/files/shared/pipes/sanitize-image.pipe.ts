import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeImage'
})
export class SanitizeImagePipe implements PipeTransform {

  constructor(
    private _domSanitizationService: DomSanitizer
  ) { }

  public transform(value: any, source: 'img' | 'css' | 'base64string' = 'img'): SafeUrl {
    switch (source) {
      case 'img':
        return this._domSanitizationService.bypassSecurityTrustUrl(`data: ${value.imageType};base64,${value.imageData}`);
      case 'css':
        return this._domSanitizationService.bypassSecurityTrustStyle(`url(data:${value.imageType};base64,${value.imageData})`);
      case 'base64string':
        return this._domSanitizationService.bypassSecurityTrustUrl(value);
    }

  }
}
