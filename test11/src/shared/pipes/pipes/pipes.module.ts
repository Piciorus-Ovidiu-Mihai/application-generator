import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizeImagePipe } from '../sanitize-image.pipe';
import { IsTruthyPipe } from '../truthy.pipe';
import { CalcAgePipe } from '../calc-age.pipe';
import { PropertyValuePipe } from '../property-value.pipe';

@NgModule({
  declarations: [
    PropertyValuePipe,
    CalcAgePipe,
    IsTruthyPipe,
    SanitizeImagePipe,
  ],
  exports: [
    PropertyValuePipe,
    CalcAgePipe,
    IsTruthyPipe,
    SanitizeImagePipe,
  ],
  providers: [
    PropertyValuePipe,
    CalcAgePipe,
    SanitizeImagePipe
  ],
  imports: [CommonModule],
})
export class PipesModule {}
