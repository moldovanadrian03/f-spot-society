import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output, output } from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: true
})
export class AnimateOnScroll implements AfterViewInit {
  @Output() visible = new EventEmitter<void>();
  @Input() threshold: number = 0.6;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.visible.emit();
        observer.unobserve(entry.target);
      }
    }, { threshold: this.threshold });

    observer.observe(this.el.nativeElement);
  }
}
