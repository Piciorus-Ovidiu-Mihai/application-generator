import { Pipe, PipeTransform } from '@angular/core';
import { DataTableColDef } from '../interfaces/col-def.interface';

@Pipe({
  name: 'displayCellData'
})
export class DisplayCellDataPipe implements PipeTransform {
  transform(item: any, field: DataTableColDef) {
    if (field.field && typeof field.field === 'string') {
      return item[field?.field];
    } else if (field.valueGetter) {
      return field.valueGetter(item);
    } else {
      return;
    }
  }
}
