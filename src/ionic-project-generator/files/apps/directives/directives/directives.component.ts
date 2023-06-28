import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent {
  public cards: any[] = [
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

  public items: string[] = ['Item 1', 'Item 2'];
  public myNumberValue: number;

  public deleteItem(item: string): void {
    const index: number = this.items.indexOf(item);

    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}
