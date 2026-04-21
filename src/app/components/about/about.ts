import { Component } from '@angular/core';
import { CONTRACT_PERSOANE_JURIDICE, FORMULAR_PERSOANE_FIZICE, openLink } from '../../utils';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {

  openLink (url: string): void {
    openLink(url);
  }

  FORMULAR_PERSOANE_FIZICE = FORMULAR_PERSOANE_FIZICE;
  CONTRACT_PERSOANE_JURIDICE = CONTRACT_PERSOANE_JURIDICE;
}
