import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  imports: [IonicModule, FormsModule, ReactiveFormsModule, CommonModule],
  selector: 'app-details-card-layout',
  templateUrl: './details-card-layout.component.html',
  styleUrls: ['./details-card-layout.component.scss'],
})
export class DetailsCardLayoutComponent {
  @Input() public iconName: string;
  @Input() public title: string;
  @Input() public displayActions: boolean = true;
  @Input() public displayMenu: boolean = false;
  @Input() public displayEdit: boolean = true;
  @Input() public displayAdd: boolean = false;
  @Input() public displayDelete: boolean = true;
  @Input() public buttonFill:
    | 'clear'
    | 'default'
    | 'outline'
    | 'solid'
    | undefined = 'solid';
  @Input() public cardId: number = 1;
  @Input() public headerTextColor: string = 'medium';

  @Output() public onAdd = new EventEmitter();
  @Output() public onEdit = new EventEmitter();
  @Output() public onDelete = new EventEmitter();

  protected edit(): void {
    this.onEdit.emit();
  }

  protected delete(): void {
    this.onDelete.emit();
  }

  protected add(): void {
    this.onAdd.emit();
  }
}
