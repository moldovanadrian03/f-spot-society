import { Component } from '@angular/core';
import { TEAM_MEMBERS } from '../../utils';
import { Member } from '../../interfaces/member.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-team-cards',
  imports: [
    NgFor
  ],
  templateUrl: './team-cards.html',
  styleUrl: './team-cards.scss',
})
export class TeamCards {
  members = TEAM_MEMBERS;
  selectedMember: Member | null = null;

}
