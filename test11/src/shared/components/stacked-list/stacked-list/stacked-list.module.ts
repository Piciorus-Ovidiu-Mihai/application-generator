import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DisplayPropPipe,
  DisplayListIconPipe,
  DisplayAvatarPipe,
} from '../stacked-list.util';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslocoModule } from '@ngneat/transloco';
import { TranslocoLocaleModule } from '@ngneat/transloco-locale';
import { StackedListComponent } from '../stacked-list.component';
import { PipesPageModule } from 'src/app/apps/pipes/pipes.module';

@NgModule({
  declarations: [StackedListComponent, DisplayPropPipe, DisplayListIconPipe, DisplayAvatarPipe],
  exports: [StackedListComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule,
    TranslocoLocaleModule,
  ],
})
export class StackedListModule {}
