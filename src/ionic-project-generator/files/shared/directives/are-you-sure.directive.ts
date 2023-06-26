import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appConfirmClick]',
  standalone: true
})
export class ConfirmClickDirective {
  @Input('appConfirmClick') confirmMessage: string = 'Are you sure you want to proceed?';

  constructor(private el: ElementRef) { }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.preventDefault();

    const confirmed = window.confirm(this.confirmMessage);

    if (confirmed) {
      this.el.nativeElement.click();
    }
  }
}
