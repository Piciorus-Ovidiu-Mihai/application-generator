import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives/directives.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from 'src/shared/directives/highlight.directive';
import { ScrollSpyDirective } from 'src/shared/directives/scroll-spy.directive';
import { SkeletonLoadingDirective } from 'src/shared/directives/skeleton-loading.directive';
import { ConfirmClickDirective } from 'src/shared/directives/are-you-sure.directive';
import { MinMaxDirective } from 'src/shared/directives/min-max.directive';


const routes: Routes = [
  {
    path: '',
    component: DirectivesComponent,
  },
];
@NgModule({
  declarations: [DirectivesComponent],
  imports: [
    CommonModule,
    FormsModule,
    HighlightDirective,
    ScrollSpyDirective,
    SkeletonLoadingDirective,
    ConfirmClickDirective,
    MinMaxDirective,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class DirectivesModule { }
