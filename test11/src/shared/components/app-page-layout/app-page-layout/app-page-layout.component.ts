import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Params, Router } from '@angular/router';
import { SearchbarCustomEvent } from '@ionic/angular';
import { Observable, map, shareReplay, timer } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';

export class PageLayoutButton {
  icon: string;
  action: VoidFunction;
}

export class PageLayoutTab {
  name: string;
  path: string;
}

@Component({
  selector: 'app-app-page-layout',
  templateUrl: './app-page-layout.component.html',
  styleUrls: ['./app-page-layout.component.scss'],
})
export class AppPageLayoutComponent  implements OnInit {
  @Input() public title: string;
  @Input() public parentTitle: string;
  @Input() public parentUri: string;
  @Input() public buttons: PageLayoutButton[];
  @Input() public tabs: PageLayoutTab[];
  @Input() public rootPath: string;
  @Input() public logo: string;
  @Input() public displayHome: boolean = false;
  @Input() public menuBtnWhen: string = 'md';
  @Input() public tabMaxWidth: string = '160px';

  @Input() public displaySearch: boolean = false;
  @Input() public searchDebounce: number = 300;
  @Input() public displayFilter: boolean = true;
  @Input() public buttonType: 'button' | 'menu' | 'none' = 'button';
  @Input() public buttonIcon: string = 'add-outline';
  @Input() public params: Params;
  @Input() public ignoreProps: string[] = ['q', 'page', 'sortorder', 'sortfield'];
  @Input() public searchPlaceholder: string;


  @Output() public searchVal = new EventEmitter<string>();
  @Output() public filterClicked = new EventEmitter();
  @Output() public buttonClicked = new EventEmitter();

  private _selectedPath: string;
  public get selectedPath(): string {
    return this._selectedPath;
  };

  public set selectedPath(val: string) {
    if (val === 'home') {
      this._selectedPath = 'home';
    } else {
      const tabToActivate = this.tabs?.find(tab => val === tab.path);
      this._selectedPath = tabToActivate?.path ?? '';
    }
  }

  public currentDateTime$: Observable<Date> = timer(0, 1000).pipe(map(_ => new Date()), shareReplay());
  public isSmall$: Observable<boolean>;

  public constructor(
    private _breakpointObserver: BreakpointObserver,
    private router: Router
  ) { }

  public ngOnInit(): void {
    const route = this.router.url;
    const tabToActivate = this.tabs?.find(tab => route.includes(tab.path));
    this.selectedPath = tabToActivate?.path || (route.includes('/home') ? 'home' : '');
    this.isSmall$ = this._breakpointObserver.observe([
      `(max-width: ${this._getBreakpointPixels(this.menuBtnWhen)}px)`
    ])
      .pipe(
        map(res => res.matches)
      );
  }

  private _getBreakpointPixels = (width: string): number => {
    switch (width) {
      case 'xs':
        return 0;
      case 'sm':
        return 576;
      case 'md':
        return 768;
      case 'lg':
        return 992;
      case 'xl':
        return 1200;
      default:
        return 1200;
    }
  }

  public search(res: any): void {
    const result = res as SearchbarCustomEvent;
    this.searchVal.emit(result.detail.value);
  }

  public filter(): void {
    this.filterClicked.emit();
  }

  public buttonClick(): void {
    if (this.buttonType === 'button') {
      this.buttonClicked.emit();
    }
  }
}
