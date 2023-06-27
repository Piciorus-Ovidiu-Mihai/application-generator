import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';

export class MenuItem {
  name: string;
  icon: string;
  url?: string;
  func?: Function;
  subItems?: MenuItem[];
  showSubItems?: boolean = false;
}

export class IconName{
  name: string;
}

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
})
export class AppLayoutComponent {
  @Input() public me: { name: string, imageSrc?: string };
  @Input() public organizationName: string;
  @Input() public logo: string;
  @Input() public logoutFunc: Function;
  @Input() public customSettingsButton: Function;
  @Input() public menuWhen: boolean | string = true;
  @Input() public menuItems: MenuItem[];
  @Input() public bottomMenuItems: MenuItem[];
  @Output() public logoutClicked = new EventEmitter();

  public menuMaxWidth = 220;
  public menuWidth: number = this.menuMaxWidth;

  public get hideClass(): string {
    return `ion-hide-${this.menuWhen}-down`;
  }

  constructor(
    private _modalCtrl: ModalController,
    private _platform: Platform
  ) { }

  get isMobile(): boolean {
    return this._platform.is('mobile');
  }

  public toggleWidth(): void {
    if (this.menuWidth === this.menuMaxWidth) {
      this.menuWidth = 60;
    } else {
      this.menuWidth = this.menuMaxWidth;
    }
  }

  public toggleSubItems(item: MenuItem) {
    item.showSubItems = !item.showSubItems;
  }

  public seeMyDetails(): void {
  }

  public logout = () => {
    if (this.logoutFunc) {
      this.logoutFunc();
    } else {
      this._modalCtrl.dismiss();
      this.logoutClicked.emit();
    }
  };
}
