import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AppLayoutComponent, MenuItemComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule
  ],
  exports: [AppLayoutComponent]
})
export class AppMainLayoutModule { }
