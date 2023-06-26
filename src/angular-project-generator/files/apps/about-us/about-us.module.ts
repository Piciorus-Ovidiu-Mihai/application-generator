import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent,
  },
];

@NgModule({
  declarations: [AboutUsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatCardModule],
})
export class AboutUsModule {}
