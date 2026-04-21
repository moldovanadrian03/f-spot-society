import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from "./components/about/about";
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { Info } from './components/info/info';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, About, Navbar, Footer, Info],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('f-spot-society');
}
