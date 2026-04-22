import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from "./components/about/about";
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { Info } from './components/info/info';
import { TeamCards } from "./components/team-cards/team-cards";
import { ProjectCards } from "./components/project-cards/project-cards";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, About, Navbar, Footer, Info, TeamCards, ProjectCards],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('f-spot-society');

  ABOUT_SECTION = 'about-section';
  INFO_SECTION = 'info-section';
  MEMBERS_SECTION = 'members-section';
  PROJECTS_SECTION = 'projects-section';
  FOOTER_SECTION = 'footer-section';
}
