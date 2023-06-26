import { Component } from '@angular/core';

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss']
})
export class LeftNavigationComponent {
  public hideSideNav: boolean = false;

  public toggleSideNav(): void {
    this.hideSideNav = !this.hideSideNav;
  }
}
