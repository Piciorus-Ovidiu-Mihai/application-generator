import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CoreRoutingModule } from '../core/core-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';


@NgModule({
  declarations: [MainComponent, FooterComponent, NavigationComponent, LeftNavigationComponent],
  imports: [CommonModule,FormsModule, ReactiveFormsModule, CoreRoutingModule],
  exports: [MainComponent, FooterComponent, NavigationComponent],
})
export class LayoutModule {}
