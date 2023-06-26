import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

export function minMaxValidator(minValue: number, maxValue: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;

    if (isNaN(value) || value < minValue || value > maxValue) {
      return { 'minMax': true };
    }

    return null;
  };
}

@Directive({
  selector: '[appMinMax]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MinMaxDirective,
      multi: true
    }
  ]
})
export class MinMaxDirective implements Validator, OnChanges {
  @Input('appMinMax') range: [number, number];

  private validator: ValidatorFn;

  ngOnChanges(changes: SimpleChanges): void {
    if ('range' in changes) {
      const [minValue, maxValue] = this.range;
      this.validator = minMaxValidator(minValue, maxValue);
    }
  }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.validator(control);
  }
}
