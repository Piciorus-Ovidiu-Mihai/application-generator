import { TemplateRef } from '@angular/core';

export interface DataTableColDef {
  headerName: string;
  field?: string;
  /* function should return a string or number with the value to display */
  valueGetter?: Function;
  /* function should return an IconName */
  /*
    Function should return a string
    Returned string should be an Ionic color string
  */
  color?: string | Function;

  /* use this prop when sortable === true and valueGetter is used to display info */
  sortField?: string;

  template?: TemplateRef<any>;
  sortable?: boolean;
  size?: number;
  align?: 'start' | 'center' | 'end';
}
