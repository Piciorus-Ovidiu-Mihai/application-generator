import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'customWeight'
})
export class CustomWeightPipe implements PipeTransform {
  transform(value: number, unit: string = 'kg'): string {
    let formattedValue: string;

    switch (unit) {
      case 'kg':
        formattedValue = `${value} kg`;
        break;
      case 'lbs':
        formattedValue = `${value} lbs`;
        break;
      case 'g':
        formattedValue = `${value} g`;
        break;
      default:
        formattedValue = `${value} ${unit}`;
        break;
    }

    return formattedValue;
  }
}
