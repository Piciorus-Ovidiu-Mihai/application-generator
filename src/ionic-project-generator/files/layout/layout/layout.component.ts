import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { menus } from 'src/constants/menus';
import { MenuItem } from 'src/shared/components/app-layout/app-layout/app-layout.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent  implements OnInit {
  public menuItems: BehaviorSubject<MenuItem[]> = new BehaviorSubject([]);
  public menuItems$: Observable<MenuItem[]> = this.menuItems.asObservable();
  public initialMenus: any[] = [
    {
      name: 'Dashboard',
      icon: 'home-outline',
      url: '/app/dashboard'
    },
    {
      name: 'Components',
      icon: 'logo-web-component',
      url: '/app/components'
    },
    {
      name: 'Ionic',
      icon: 'logo-ionic',
      url: '/app/ionic-components'
    },
    {
      name: 'Directives',
      icon: 'cog-outline',
      url: '/app/directives'
    },
    {
      name: 'Pipes',
      icon: 'hammer-outline',
      url: '/app/pipes'
    },
    {
      name: 'About us',
      icon: 'people-circle-outline',
      url: '/app/about-us'
    },
    {
      name: 'Authentication',
      icon: 'log-in-outline',
      url: '/auth/login'
    },
  ];
  public constructor() { }

  public ngOnInit(): void {
    this.menuItems.next(this.removeObjectsByName(menus, this.initialMenus))
  }

  public removeObjectsByName(names: string[], objects: any[]): any[] {
    return objects.filter((object) => !names.includes(object.name));
  }
}
