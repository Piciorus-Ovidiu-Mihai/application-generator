import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsListComponent } from './components-list/components-list.component';
import { ComponentsPageComponent } from './components-page/components-page.component';
import { LoadingComponent } from 'src/shared/components/loading/loading.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [ComponentsListComponent, ComponentsPageComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    LoadingComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule
  ],
})
export class ComponentsModule {}
