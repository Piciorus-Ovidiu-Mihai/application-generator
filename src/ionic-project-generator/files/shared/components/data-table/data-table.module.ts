import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DataTableComponent } from './component/data-table.component';
import { FormsModule } from '@angular/forms';
import { DisplayCellDataPipe } from './pipes/display-cell-data.pipe';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [DataTableComponent, DisplayCellDataPipe],
  imports: [CommonModule, FormsModule, ScrollingModule, IonicModule],
  providers: [DisplayCellDataPipe],
  exports: [DataTableComponent],
})
export class DataTableModule {}
