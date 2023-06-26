import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-list',
  templateUrl: './directives-list.component.html',
  styleUrls: ['./directives-list.component.scss']
})
export class DirectivesListComponent {
  public items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  public myNumberValue: number;

  public deleteItem(item: string): void {
    const index: number = this.items.indexOf(item);

    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}
