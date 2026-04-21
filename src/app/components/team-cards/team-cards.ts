import { Component } from '@angular/core';
import { TEAM_MEMBERS } from '../../utils';
import { Card } from '../../interfaces/card.model';
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
  selectedCard: Card | null = null;

}
