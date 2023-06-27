import { Pipe, PipeTransform } from '@angular/core';
import { RouterDirection } from '@ionic/core';

export class StackedListField {
  property?: string | Function;
  pipe?: 'currency' | 'number' | 'date';
  icon?: string;
}

export class StackedListItem {
  fields: StackedListField[];
  image?: string;
  routerUrl?: string | Function;
  routerDirection?: RouterDirection;
  endIcons?: (string | Function)[];
  disabled?: boolean | Function;
  icons?: StackedListItemEndIcon[]
  avatar?: string | Function;
}

export class StackedListItemEndIcon {
  icon: string | Function;
  color?: string | Function;
  size?: string;
}

@Pipe({
  name: 'displayProp'
})
export class DisplayPropPipe implements PipeTransform {
  transform(item: any, field: StackedListField) {
    if (typeof field.property === 'string') {
      return item[field?.property];
    } else {
      return field.property(item);
    }
  }
}

@Pipe({
  name: 'displayAvatar'
})
export class DisplayAvatarPipe implements PipeTransform {
  transform(item: any, listItem: StackedListItem) {
    if (typeof listItem.avatar === 'string') {
      return listItem.avatar;
    } else {
      return listItem.avatar(item);
    }
  }
}

@Pipe({
  name: 'displayListIcon'
})
export class DisplayListIconPipe implements PipeTransform {
  transform(item: any, icon: string | Function) {
    if (!icon) {
      return null;
    }

    if (typeof icon === 'string') {
      return icon;
    } else {
      return icon(item);
    }
  }
}
