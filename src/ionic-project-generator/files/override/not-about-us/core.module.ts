import { NgModule } from '@angular/core';
import { LayoutModule } from '../layout/layout.module';
import { CoreComponent } from './core/core.component';
import { RouterModule, Routes } from '@angular/router';
import { AppPageLayoutModule } from 'src/shared/components/app-page-layout/app-page-layout.module';


const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
				path: 'dashboard',
				loadChildren: () => import('../apps/dashboard/dashboard.module').then((m) => m.DashboardModule),
			},
      {
				path: 'components',
				loadChildren: () => import('../apps/components/components.module').then((m) => m.ComponentsModule),
			},
      {
				path: 'ionic-components',
				loadChildren: () => import('../apps/ionic-components/ionic-components.module').then((m) => m.IonicComponentsModule),
			},
      {
				path: 'directives',
				loadChildren: () => import('../apps/directives/directives.module').then((m) => m.DirectivesModule),
			},
      {
				path: 'pipes',
				loadChildren: () => import('../apps/pipes/pipes.module').then((m) => m.PipesPageModule),
			},
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: '**', redirectTo: '/components' }
    ]
  },
];

@NgModule({
  declarations: [CoreComponent],
  imports: [
    LayoutModule,
    RouterModule.forChild(routes),
    AppPageLayoutModule
  ]
})
export class CoreModule { }