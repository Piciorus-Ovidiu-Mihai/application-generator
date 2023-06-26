import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  StackedListItem,
  StackedListField,
} from './stacked-list.util';

@Component({
  selector: 'app-stacked-list',
  templateUrl: './stacked-list.component.html',
  styleUrls: ['./stacked-list.component.scss'],
})
export class StackedListComponent {
  @Input() public items: any[];
  @Input() public selectedItem: any;
  @Input() public compareSelectedBy: string = 'id';
  @Input() public listItems: StackedListItem;
  @Input() public selectable: boolean = false;
  @Input() public loading: boolean;
  @Input() public clickable: boolean = true;
  @Input() public checkedList: any[] = [];

  private _fields: StackedListField[];
  @Input() public set fields(fields: StackedListField[]) {
    this._fields = fields;
  }

  public get fields(): StackedListField[] {
    return this._fields ?? this.listItems?.fields ?? [];
  }

  @Output() public itemClicked = new EventEmitter<any>();

  public isSelected(item: any): boolean {
    return (
      item?.[this.compareSelectedBy] ===
      this.selectedItem?.[this.compareSelectedBy]
    );
  }

  public isChecked(item: any): boolean {
    const index = this.checkedList.findIndex((i) => item.id === i?.id);
    const val = index !== -1;
    return val;
  }

  public itemClick = (item: any) => {
    this.selectedItem = item;
    this.itemClicked.emit(item);
  };

  public getProperty(item: any, field: StackedListField) {
    if (typeof field.property === 'string') {
      return item[field?.property];
    } else {
      return field.property(item);
    }
  }

  public getLink(item: any, routerUrl: string | Function) {
    if (typeof routerUrl === 'string') {
      return routerUrl;
    } else {
      return routerUrl(item);
    }
  }

  public trackByFn(index: number, item: any) {
    return item?.id ? item.id : index;
  }

  public check(item: any, event: Event) {
    event.preventDefault();
    event.stopPropagation();

    const index = this.checkedList.findIndex((i) => item.id === i?.id);

    if (index === -1) {
      this.checkedList.push(item);
    } else {
      this.checkedList.splice(index, 1);
    }
  }

  public isDisabled(item: any, listItem: StackedListItem): boolean {
    if (!listItem) {
      return false;
    }
    if (typeof listItem.disabled === 'boolean') {
      return listItem.disabled;
    }

    if (typeof listItem.disabled === 'function') {
      return listItem.disabled(item);
    }

    return false;
  }
}
