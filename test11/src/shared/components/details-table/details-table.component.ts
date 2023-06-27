import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslocoModule } from '@ngneat/transloco';
import { TranslocoLocaleModule } from '@ngneat/transloco-locale';

export class DetailsTableRow {
  key?: any;
  value?: any;
  valueType?:
    | undefined
    | 'email'
    | 'phone'
    | 'internal_route'
    | 'external_route'
    | 'boolean'
    | 'date_time'
    | 'date'
    | 'currency' = undefined;
  template?: TemplateRef<any>;
  route?: string;
}

@Component({
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TranslocoModule, TranslocoLocaleModule, ReactiveFormsModule],
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.scss'],
})
export class DetailsTableComponent{
  @Input() public rows: DetailsTableRow[] = [];
  @Input() public gridPadding: number = 12;
  @Input() public gridColumnPadding: number = 12;
  @Input() public noValuePlaceholder: string = '';
}
