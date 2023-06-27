import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsListComponent } from './components-list/components-list.component';
import { ComponentsPageComponent } from './components-page/components-page.component';
import { LoadingComponent } from 'src/shared/components/loading/loading.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [ComponentsListComponent, ComponentsPageComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    LoadingComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatTableModule,
  ],
})
export class ComponentsModule {}
