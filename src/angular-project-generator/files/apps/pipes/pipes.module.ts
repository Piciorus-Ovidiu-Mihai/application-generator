import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PipesPageComponent } from './pipes-page/pipes-page.component';
import { SharedPipesModule } from 'src/shared/pipes/pipes.module';
import { PipesListComponent } from './pipes-list/pipes-list.component';
import { MatTableModule } from '@angular/material/table';


const routes: Routes = [
  {
    path: '',
    component: PipesPageComponent,
  },
];
@NgModule({
  declarations: [PipesPageComponent, PipesListComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedPipesModule,
    MatTableModule
  ]
})
export class PipesModule { }
