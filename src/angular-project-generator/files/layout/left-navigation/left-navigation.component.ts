import { Component } from '@angular/core';
import { menus } from 'src/constants/menus';

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss']
})
export class LeftNavigationComponent {
  public headerMenuButtons = this.removeObjectsByName(menus, [
    {
      title: 'Home',
      ref: '/app/home',
      icon: 'home'
    },
    {
      title: 'Components',
      ref: '/app/components',
      icon: 'dashboard'
    },
    {
      title: 'Directives',
      ref: '/app/directives',
      icon: 'build'
    },
    {
      title: 'Pipes',
      ref: '/app/pipes',
      icon: 'settings'
    },
    {
      title: 'About us',
      ref: '/app/about-us',
      icon: 'people'
    },
    {
      title: 'Login',
      ref: '/auth/login',
      icon: 'login'
    },
  ]);
  public hideSideNav: boolean = false;
  public mobileQuery: MediaQueryList;

  public toggleSideNav(): void {
    this.hideSideNav = !this.hideSideNav;
  }

  public removeObjectsByName(names: string[], objects: any[]): any[] {
    return objects.filter((object) => !names.includes(object.title));
  }
}
