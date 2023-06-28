import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicComponentsComponent } from './ionic-components/ionic-components.component';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: IonicComponentsComponent,
  },
];
@NgModule({
  declarations: [IonicComponentsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    IonicModule,
  ],
})
export class IonicComponentsModule {}
