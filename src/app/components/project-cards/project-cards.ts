import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { PROJECTS, openLink } from '../../utils';
import { slideInUp } from '../../animations/slide.animations';
import { AnimateOnScroll } from '../../animate-on-scroll';

@Component({
  selector: 'app-project-cards',
  imports: [
    NgFor,
    AnimateOnScroll
  ],
  templateUrl: './project-cards.html',
  styleUrl: './project-cards.scss',
  animations: [
    slideInUp
  ]
})
export class ProjectCards {
  isVisible: boolean = false;

  toggle(project: any): void {
    project.isExpanded = !project.isExpanded;
  }

  openLink(url: string): void {
    openLink(url);
  }

  PROJECTS = PROJECTS;
}
