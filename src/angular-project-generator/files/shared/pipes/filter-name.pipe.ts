import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {
    /**
     * Transform
     *
     * @param {any[]} items
     * @param {string} searchText
     * @returns {any[]}
     */
    transform(items: any[], searchText: string): any[] {
      if (!items) {
          return [];
      }
      if (!searchText) {
          return items;
      }

      return items;
  }
}
