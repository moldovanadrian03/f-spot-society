import { Component } from '@angular/core';
import { FACEBOOK, INSTAGRAM, openLink } from '../../utils';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

  openLink (url: string): void {
    openLink(url);
  }

  FACEBOOK = FACEBOOK;
  INSTAGRAM = INSTAGRAM;
}
