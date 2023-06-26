import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent {

  public items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  public myNumberValue: number;

  public deleteItem(item: string): void {
    const index: number = this.items.indexOf(item);

    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}
