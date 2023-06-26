import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollSpy]',
  standalone: true
})
export class ScrollSpyDirective {
  @Input('appScrollSpy') activeClass: string = 'active';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll')
  onWindowScroll() {
    const currentOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const elementOffset = this.el.nativeElement.offsetTop;

    if (currentOffset >= elementOffset) {
      this.renderer.addClass(this.el.nativeElement, this.activeClass);
    } else {
      this.renderer.removeClass(this.el.nativeElement, this.activeClass);
    }
  }
}
