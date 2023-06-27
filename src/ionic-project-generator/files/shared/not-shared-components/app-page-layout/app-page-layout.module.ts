import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PropertyCountPipe } from './app-page-layout/property-count.pipe';
import { AppPageLayoutComponent } from './app-page-layout/app-page-layout.component';
import { TranslocoLocaleModule } from '@ngneat/transloco-locale';
import { SubscribeDirective } from '@ngneat/subscribe';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [PropertyCountPipe, AppPageLayoutComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    TranslocoLocaleModule,
    SubscribeDirective,
    TranslocoModule
  ],
  exports: [AppPageLayoutComponent],
})
export class AppPageLayoutModule {}
