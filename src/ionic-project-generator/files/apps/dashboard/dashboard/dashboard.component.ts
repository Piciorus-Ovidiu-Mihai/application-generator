import { Component } from '@angular/core';
import { DashboardTemplate } from 'src/shared/components/dashboard-component/dashboard-component.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public cards: DashboardTemplate[] = [
    {
      title: 'Dashboard',
      icon: 'home-outline',
      description:
        'This is the dashboard card. It will navigate to the home page.',
      link: 'app/dashboard',
    },
    {
      title: 'Components',
      icon: 'logo-web-component',
      description:
        'In this page will be presented some useful shared components',
      link: 'app/components',
    },
    {
      title: 'Ionic',
      icon: 'logo-ionic',
      description:
        'There some ionic components will be presented and implemented',
      link: 'app/ionic-components',
    },
    {
      title: 'Directives',
      icon: 'settings',
      description:
        'Angular directives are markers on HTML help you to put extra functioanlities',
      link: 'app/directives',
    },
    {
      title: 'Pipes',
      icon: 'hammer-outline',
      description:
        'Angular pipes are transformation functions that are used in html',
      link: 'app/pipes',
    },
    {
      title: 'About us',
      icon: 'people-circle-outline',
      description: 'This section will present a simple about us template',
      link: 'app/about-us',
    },
  ];
}
