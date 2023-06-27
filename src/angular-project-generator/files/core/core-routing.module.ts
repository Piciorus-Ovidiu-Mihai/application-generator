import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { routeToRemove } from 'src/constants/routes';

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
				path: 'components',
				loadChildren: () => import('../apps/components/components.module').then((m) => m.ComponentsModule),
			},
      {
				path: 'home',
				loadChildren: () => import('../apps/home/home.module').then((m) => m.HomeModule),
			},
      {
				path: 'directives',
				loadChildren: () => import('../apps/directives/directives.module').then((m) => m.DirectivesModule),
			},
      {
				path: 'pipes',
				loadChildren: () => import('../apps/pipes/pipes.module').then((m) => m.PipesModule),
			},
      {
				path: 'about-us',
				loadChildren: () => import('../apps/about-us/about-us.module').then((m) => m.AboutUsModule),
			},
      { path: '', pathMatch: 'full', redirectTo: 'components' },
      { path: '**', redirectTo: '/components' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(modifyRoutes(routes, routeToRemove))],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
