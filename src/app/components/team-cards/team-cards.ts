import { Component } from '@angular/core';
import { TEAM_MEMBERS } from '../../utils';
import { Member } from '../../interfaces/member.model';
import { NgFor } from '@angular/common';
import { AnimateOnScroll } from '../../animate-on-scroll';
import { slideInUp } from '../../animations/slide.animations';

@Component({
  selector: 'app-team-cards',
  imports: [
    NgFor,
    AnimateOnScroll
  ],
  templateUrl: './team-cards.html',
  styleUrl: './team-cards.scss',
  animations: [
    slideInUp
  ]
})
export class TeamCards {
  members = TEAM_MEMBERS;
  selectedMember: Member | null = null;
  isVisible: boolean = false;
}
