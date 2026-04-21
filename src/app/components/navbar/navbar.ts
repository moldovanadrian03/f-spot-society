import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { After } from 'v8';

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
}
