import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesPageComponent } from './directives-page/directives-page.component';
import { DirectivesListComponent } from './directives-list/directives-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HighlightDirective } from 'src/shared/directives/highlight.directive';
import { ScrollSpyDirective } from 'src/shared/directives/scroll-spy.directive';
import { SkeletonLoadingDirective } from 'src/shared/directives/skeleton-loading.directive';
import { ConfirmClickDirective } from 'src/shared/directives/are-you-sure.directive';
import { FormsModule } from '@angular/forms';
import { MinMaxDirective } from 'src/shared/directives/min-max.directive';

const routes: Routes = [
  {
    path: '',
    component: DirectivesPageComponent,
  },
];

@NgModule({
  declarations: [DirectivesPageComponent, DirectivesListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HighlightDirective,
    ScrollSpyDirective,
    SkeletonLoadingDirective,
    ConfirmClickDirective,
    MinMaxDirective,
    FormsModule
  ],
})
export class DirectivesModule {}
