import { Component } from '@angular/core';
import { AnimateOnScroll } from '../../animate-on-scroll';
import { slideInDown, slideInLeft, slideInRight, slideInUp } from '../../animations/slide.animations';

@Component({
  selector: 'app-info',
  imports: [
    AnimateOnScroll
  ],
  templateUrl: './info.html',
  styleUrl: './info.scss',
  animations: [
    slideInLeft
  ]
})
export class Info {
  isVisible: boolean = false;
}
