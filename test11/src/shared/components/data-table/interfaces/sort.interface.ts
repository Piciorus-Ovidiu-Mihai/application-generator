import { SortOrder } from '../enums/sortorder.enum';

export interface Sort {
  sortField: string;
  sortOrder: SortOrder;
}
