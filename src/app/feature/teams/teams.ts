import { Component } from '@angular/core';
import { teamCards } from './entities/entities';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.html',
  styleUrl: './teams.scss',
  standalone:false
})
export class Teams {
  protected readonly cards = teamCards;
}
