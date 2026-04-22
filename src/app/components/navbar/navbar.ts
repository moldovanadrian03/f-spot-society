import { Component, HostListener, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ABOUT_SECTION, CARDS_SECTION, FOOTER_SECTION, INFO_SECTION, scrollToElementById } from '../../utils';

@Component({
  selector: 'app-navbar',
  imports: [
    MatIconModule
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
  isSidenavOpened: boolean = false;
  isMobileView: boolean = false;
  resizeObserver: ResizeObserver | null = null;

  ngOnInit(): void {
    this.updateIsMobileView();
    this.resizeObserver = new ResizeObserver(() => {
      this.updateIsMobileView();
    });
    this.resizeObserver.observe(document.body);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.updateIsMobileView();
  }

  private updateIsMobileView(): void {
    const screenWidth = window.innerWidth;
    this.isMobileView = screenWidth <= 768;
  }

  toggleSidenav(): void {
    this.isSidenavOpened = !this.isSidenavOpened;
  }

  scrollTo(element: string): void {
    scrollToElementById(element);
  }

  ABOUT_SECTION = ABOUT_SECTION;
  INFO_SECTION = INFO_SECTION;
  MEMBERS_SECTION = CARDS_SECTION;
  FOOTER_SECTION = FOOTER_SECTION;
}
