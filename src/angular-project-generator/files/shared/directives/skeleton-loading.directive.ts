import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[skeletonLoading]'
})
export class SkeletonLoadingDirective implements OnInit {
  @Input('skeletonLoading') isLoading: boolean;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    if (this.isLoading) {
      this.addSkeletonStyles();
    }
  }

  private addSkeletonStyles() {
    const element = this.elementRef.nativeElement;
    const wrapper = document.createElement('div');
    wrapper.classList.add('skeleton-loading-wrapper');
    element.parentNode.insertBefore(wrapper, element);
    wrapper.appendChild(element);

    wrapper.style.position = 'relative';
    wrapper.style.overflow = 'hidden';
    wrapper.style.width = element.offsetWidth + 'px';
    wrapper.style.height = element.offsetHeight + 'px';
    wrapper.style.background = 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)';
    wrapper.style.backgroundSize = '200% 100%';
    wrapper.style.animation = 'skeleton-loading 1.5s infinite';
  }
}
