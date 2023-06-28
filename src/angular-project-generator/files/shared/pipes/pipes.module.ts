import { NgModule } from '@angular/core';
import { CurrencyPipe } from './currency-code.pipe';
import { CustomDatePipe } from './custom-date.pipe';
import { FilterNamePipe } from './filter-name.pipe';
import { SanitizeImagePipe } from './sanitize-image.pipe';
import { UppercasePipe } from './upper-case.pipe';
import { SlicePipe } from './slice.pipe';
import { CalcAgePipe } from './calc-age.pipe';
import { CustomWeightPipe } from './custom-weight.pipe';
import { SkeletonLoadingDirective } from '../directives/skeleton-loading.directive';

@NgModule({
  declarations: [
    CurrencyPipe,
    CustomDatePipe,
    FilterNamePipe,
    SanitizeImagePipe,
    SlicePipe,
    UppercasePipe,
    CalcAgePipe,
    CustomWeightPipe,
  ],
  exports: [
    CurrencyPipe,
    CustomDatePipe,
    FilterNamePipe,
    SanitizeImagePipe,
    SlicePipe,
    UppercasePipe,
    CalcAgePipe,
    CustomWeightPipe,
  ],
})
export class SharedPipesModule {}
