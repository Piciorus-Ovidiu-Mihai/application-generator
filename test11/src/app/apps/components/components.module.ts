import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { RouterModule, Routes } from '@angular/router';
import { DataTableModule } from 'src/shared/components/data-table/data-table.module';
import { IonicModule } from '@ionic/angular';
import { DetailsCardLayoutComponent } from 'src/shared/components/details-card-layout/details-card-layout.component';
import { DetailsTableComponent } from 'src/shared/components/details-table/details-table.component';
import { StackedListModule } from 'src/shared/components/stacked-list/stacked-list/stacked-list.module';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
  },
];
@NgModule({
  declarations: [ComponentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule,
    DataTableModule,
    DetailsCardLayoutComponent,
    DetailsTableComponent,
    StackedListModule
  ],
})
export class ComponentsModule {}
