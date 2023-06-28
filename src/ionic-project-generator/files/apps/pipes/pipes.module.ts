import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes/pipes.component';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/shared/pipes/pipes.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: PipesComponent,
  },
];
@NgModule({
  declarations: [PipesComponent],
  imports: [
    IonicModule,
    PipesModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class PipesPageModule {}
