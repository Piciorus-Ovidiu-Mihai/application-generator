import { Pipe, PipeTransform } from '@angular/core';
export class EntityProperty {
  code: string;
  name?: string;
  value: string;
}


@Pipe({
  name: 'propertyValue'
})
export class PropertyValuePipe implements PipeTransform {

  public transform = (properties: EntityProperty[], code: string) => {
    const prop: EntityProperty = properties?.find(p => p.code === code);

    return prop?.value || '';
  }

}
