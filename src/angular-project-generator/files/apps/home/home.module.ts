import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeTemplateComponent } from 'src/shared/components/home-template/home-template.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [RouterModule.forChild(routes), CommonModule, HomeTemplateComponent],
})
export class HomeModule {}
