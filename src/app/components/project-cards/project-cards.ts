import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { PROJECTS, openLink } from '../../utils';

@Component({
  selector: 'app-project-cards',
  imports: [
    NgFor
  ],
  templateUrl: './project-cards.html',
  styleUrl: './project-cards.scss',
})
export class ProjectCards {

  toggle(project: any): void {
    project.isExpanded = !project.isExpanded;
  }

  openLink(url: string): void {
    openLink(url);
  }

  PROJECTS = PROJECTS;
}
