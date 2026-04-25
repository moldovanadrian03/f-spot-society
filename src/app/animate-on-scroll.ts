import { AfterViewInit, Directive, ElementRef, EventEmitter, Output, output } from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: true
})
export class AnimateOnScroll implements AfterViewInit {
  @Output() visible = new EventEmitter<void>();

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.visible.emit();
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.2 }); // Adjust the threshold as needed

    observer.observe(this.el.nativeElement);
  }
}
