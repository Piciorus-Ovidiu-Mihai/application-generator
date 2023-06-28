import { Component, ViewChild } from '@angular/core';
import { IonModal, ItemReorderEventDetail } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-ionic-components',
  templateUrl: './ionic-components.component.html',
  styleUrls: ['./ionic-components.component.scss'],
})
export class IonicComponentsComponent {
  @ViewChild(IonModal) modal: IonModal;
  public alertButtons: string[] = ['OK'];
  public message: string = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  public name: string;

  public cancel(): void {
    this.modal.dismiss(null, 'cancel');
  }

  public confirm(): void {
    this.modal.dismiss(this.name, 'confirm');
  }

  public onWillDismiss(event: Event): void {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  public handleReorder(ev: CustomEvent<ItemReorderEventDetail>): void {
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    ev.detail.complete();
  }
}
