import { Component } from '@angular/core';
import { HomeTemplate } from 'src/shared/components/home-template/home-template.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public cards: HomeTemplate[] = [
    {
      title: 'Dashboard',
      icon: 'dashboard',
      description: 'Sample text. Click to select the Text Element.',
      link: 'app/home'
    },
    {
      title: 'Components',
      icon: 'pageview',
      description: 'Sample text. Click to select the Text Element.',
      link: 'app/components'
    },
    {
      title: 'Directives',
      icon: 'settings',
      description: 'Sample text. Click to select the Text Element.',
      link: 'app/directives'
    },
    {
      title: 'Pipes',
      icon: 'line_weight',
      description: 'Sample text. Click to select the Text Element.',
      link: 'app/pipes'
    },
    {
      title: 'Ionic',
      icon: 'filter_frames',
      description: 'Sample text. Click to select the Text Element.',
      link: 'app/ionic-components'
    },
    {
      title: 'About us',
      icon: 'supervised_user_circle',
      description: 'Sample text. Click to select the Text Element.',
      link: 'app/about-us'
    },
  ];
}
