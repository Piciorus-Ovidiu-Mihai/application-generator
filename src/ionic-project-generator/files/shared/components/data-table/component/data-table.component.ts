import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataTableColDef } from '../interfaces/col-def.interface';
import { Sort } from '../interfaces/sort.interface';
import { SortOrder } from '../enums/sortorder.enum';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  @Input() public rowData: any[];
  @Input() public columns: DataTableColDef[];
  @Input() public loading: boolean;

  @Input() public checkboxSelectable: boolean = false;
  @Input() public checkedRows: any[] = [];
  @Input() public isBoldFirstColumn: boolean = true;

  @Input() public itemSize: number = 40;
  @Input() public minBufferPx: number = 900;
  @Input() public maxBufferPx: number = 1350;


  @Input() public sorts: Sort;
  @Output() public sort = new EventEmitter<Sort>();

  @Output() public onRowClicked = new EventEmitter();
  @Output() public onScroll = new EventEmitter();

  protected sortField: string;
  protected sortOrder: SortOrder;

  public constructor() {
    this.sortField = this.sorts?.sortField;
    this.sortOrder = this.sorts?.sortOrder;
  }

  public rowClicked(row: any): void {
    this.onRowClicked.emit(row);
  }

  public loadData(event: any): void {
    this.onScroll.emit(event);
  }

  public isChecked(item: any): boolean {
    const index: number = this.checkedRows.findIndex(i => item.id === i?.id);
    const val = index !== -1;
    return val;
  }

  public check(item: any): void {
    const index = this.checkedRows.findIndex(i => item.id === i?.id);

    if (index === -1) {
      this.checkedRows.push(item);
    } else {
      this.checkedRows.splice(index, 1);
    }
  }

  public toggleAll(): void {
    if (this.isNoneChecked()) {
      this.rowData.forEach((i: any) => {
        this.checkedRows.push(i);
      });
    } else if (this.isSomeChecked()) {
      this.checkedRows = [];
      this.rowData.forEach((i: any) => {
        this.checkedRows.push(i);
      });
    } else {
      this.checkedRows = [];
    }
  }

  public isAllChecked(): boolean {
    return (
      this.checkedRows?.length === this.rowData?.length &&
      this.rowData?.length > 0
    );
  }

  public isNoneChecked(): boolean {
    return !this.checkedRows || this.checkedRows?.length === 0;
  }

  public isSomeChecked(): boolean {
    return !this.isAllChecked() && !this.isNoneChecked();
  }

  public onSort(col: DataTableColDef): void {
    if (!col.field && !col.sortField) {
      console.warn('no field to sort on; use sortField property in case when valueGetter is used');
      return;
    }

    const field = col.field || col.sortField;

    if (field !== this.sortField) {
      // if sortField changes, set sortOrder to ASC;

      this.sortField = field;
      this.sortOrder = SortOrder.ASC;
    } else {
      // if sortField is the same, toggle sortOrder

      this.sortOrder = (this.sortOrder === SortOrder.ASC) ? SortOrder.DESC : SortOrder.ASC;
    }

    this.sort.emit({ sortField: this.sortField, sortOrder: this.sortOrder });

  }
}
