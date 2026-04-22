import { Component } from '@angular/core';
import { FACEBOOK, INSTAGRAM, openLink, scrollToElementById, ABOUT_SECTION, INFO_SECTION, MEMBERS_SECTION, PROJECTS_SECTION } from '../../utils';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

  openLink(url: string): void {
    openLink(url);
  }

  scrollTo(element: string): void {
    scrollToElementById(element);
  }

  FACEBOOK = FACEBOOK;
  INSTAGRAM = INSTAGRAM;

  ABOUT_SECTION = ABOUT_SECTION;
  INFO_SECTION = INFO_SECTION;
  MEMBERS_SECTION = MEMBERS_SECTION;
  PROJECTS_SECTION = PROJECTS_SECTION;
}
