import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'truthy'
})
export class IsTruthyPipe implements PipeTransform {

  public transform = (entity: any, properties: string[]): boolean => {
    const nestedProperties = properties.map(property => property.split('.'));
    return nestedProperties.every(propertyPath => {
      let nestedEntity = entity;
      return propertyPath.every(property => {
        nestedEntity = nestedEntity[property];
        return !!nestedEntity;
      });
    });
  }

}
