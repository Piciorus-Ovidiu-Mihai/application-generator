import { Component, Input } from '@angular/core';
import { MenuItem } from '../app-layout/app-layout.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent {
  @Input() public menuMaxWidth = 220;
  @Input() public menuWidth: number = this.menuMaxWidth;
  @Input() public menuItem: MenuItem;
  @Input() public isSubItem: boolean;

  public get displayMenuChevron(): boolean {
    return this.menuItem.subItems?.length > 0;
  }

  public get menuIsOpen(): boolean {
    return this.menuItem.showSubItems;
  }

  public constructor(private readonly _router: Router) {}

  public itemClicked(func: Function): void {
    func();
  }

  public isActive(item: MenuItem): boolean {
    const url = this._router.url;
    return url.includes(item.url);
  }
}
