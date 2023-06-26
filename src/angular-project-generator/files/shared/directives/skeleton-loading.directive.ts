import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appSkeletonLoading]',
  standalone: true,
})
export class SkeletonLoadingDirective implements OnChanges {
  @Input('appSkeletonLoading') loading: boolean = false;
  @Input() skeletonColor: string = '#f2f2f2';
  @Input() skeletonAnimation: string = 'pulse';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if ('loading' in changes) {
      if (this.loading) {
        this.showSkeleton();
      } else {
        this.hideSkeleton();
      }
    }
  }

  private showSkeleton() {
    this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
    this.renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.skeletonColor);

    const skeletonElement = this.renderer.createElement('div');
    this.renderer.addClass(skeletonElement, 'skeleton-loading');
    this.renderer.addClass(skeletonElement, this.skeletonAnimation);
    this.renderer.setStyle(skeletonElement, 'position', 'absolute');
    this.renderer.setStyle(skeletonElement, 'top', '0');
    this.renderer.setStyle(skeletonElement, 'left', '0');
    this.renderer.setStyle(skeletonElement, 'right', '0');
    this.renderer.setStyle(skeletonElement, 'bottom', '0');

    this.renderer.appendChild(this.el.nativeElement, skeletonElement);
  }

  private hideSkeleton() {
    const skeletonElement = this.el.nativeElement.querySelector('.skeleton-loading');
    if (skeletonElement) {
      this.renderer.removeChild(this.el.nativeElement, skeletonElement);
    }
  }
}
