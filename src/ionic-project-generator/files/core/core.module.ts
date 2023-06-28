import { NgModule } from '@angular/core';
import { LayoutModule } from '../layout/layout.module';
import { CoreComponent } from './core/core.component';
import { RouterModule, Routes } from '@angular/router';
import { AppPageLayoutModule } from 'src/shared/components/app-page-layout/app-page-layout.module';
import { routeToRemove } from 'src/constants/constants';

function modifyRoutes(routes: Routes, routesToRemove: string[]): Routes {
  const modifiedRoutes: Routes = [];

  routes.forEach((route) => {
    const modifiedRoute: any = { ...route };

    if (route.children) {
      modifiedRoute.children = route.children.filter((child) => {
        const shouldRemove = routesToRemove.includes(child.path);

        if (shouldRemove) {
          console.log(`Removing route: ${child.path}`);
        }

        return !shouldRemove;
      });
    }

    modifiedRoutes.push(modifiedRoute);
  });

  return modifiedRoutes;
}

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
      {
				path: 'about-us',
				loadChildren: () => import('../apps/about-us/about-us.module').then((m) => m.AboutUsModule),
			},
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: '**', redirectTo: '/components' }
    ],
  },
];

@NgModule({
  declarations: [CoreComponent],
  imports: [
    LayoutModule,
    RouterModule.forChild(modifyRoutes(routes, routeToRemove)),
    AppPageLayoutModule,
  ],
})
export class CoreModule {}
