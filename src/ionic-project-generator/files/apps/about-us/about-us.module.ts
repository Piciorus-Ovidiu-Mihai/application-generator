import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent,
  },
];
@NgModule({
  declarations: [AboutUsComponent],
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
})
export class AboutUsModule {}
