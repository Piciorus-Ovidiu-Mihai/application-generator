import { Component, OnInit } from '@angular/core';
import { EntityProperty } from 'src/shared/pipes/property-value.pipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent  implements OnInit {
  entityProperties: EntityProperty[] = [
    { code: 'code1', name: 'Property 1', value: 'Value 1' },
    { code: 'code2', name: 'Property 2', value: 'Value 2' },
    { code: 'code3', name: 'Property 3', value: 'Value 3' }
  ];
  constructor() { }

  ngOnInit() {}

  getPropertyValue(code: string): string {
    return this.entityProperties?.find(p => p.code === code)?.value || '';
  }

}
