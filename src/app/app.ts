import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from "./components/about/about";
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { Info } from './components/info/info';
import { TeamCards } from "./components/team-cards/team-cards";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, About, Navbar, Footer, Info, TeamCards],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('f-spot-society');
}
