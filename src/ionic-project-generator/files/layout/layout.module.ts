import { NgModule } from '@angular/core';
import { AppMainLayoutModule } from 'src/shared/components/app-layout/app-layout.module';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AppPageLayoutModule } from 'src/shared/components/app-page-layout/app-page-layout.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    AppMainLayoutModule,
    RouterModule,
    IonicModule,
    AppPageLayoutModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
