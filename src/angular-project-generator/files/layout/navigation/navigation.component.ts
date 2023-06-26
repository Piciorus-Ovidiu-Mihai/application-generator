import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  public headerMenuButtons = [
    {
      title: 'Home',
      ref: 'app/home',
    },
    {
      title: 'Components',
      ref: 'app/components',
    },
    {
      title: 'Directives',
      ref: 'app/directives',
    },
    {
      title: 'Pipes',
      ref: 'app/pipes',
    },
    {
      title: 'About us',
      ref: 'app/about-us',
    },
    {
      title: 'Login',
      ref: 'auth/login',
    },
  ];
  public isChecked = false;

  public getHref(ref: string): string {
    return `#${ref}`;
  }

  public toggleMobileMenu(menu: any): void {
    menu.classList.toggle('open');
  }

  public closeMenu(): void {
    this.isChecked = false;
  }
}
