import { NgModule } from '@angular/core';
import { CoreComponent } from './core/core.component';
import { LayoutModule } from '../layout/layout.module';
import { CoreRoutingModule } from './core-routing.module';



@NgModule({
  declarations: [
    CoreComponent,
  ],
  imports: [
    LayoutModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
