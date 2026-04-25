import { Component } from '@angular/core';
import { CONTRACT_PERSOANE_JURIDICE, FORMULAR_PERSOANE_FIZICE, openLink } from '../../utils';
import { AnimateOnScroll } from '../../animate-on-scroll';
import { slideInDown } from '../../animations/slide.animations';

@Component({
  selector: 'app-about',
  imports: [
    AnimateOnScroll
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  animations: [
    slideInDown
  ]
})
export class About {
  isVisible: boolean = false;

  openLink (url: string): void {
    openLink(url);
  }

  FORMULAR_PERSOANE_FIZICE = FORMULAR_PERSOANE_FIZICE;
  CONTRACT_PERSOANE_JURIDICE = CONTRACT_PERSOANE_JURIDICE;
}
