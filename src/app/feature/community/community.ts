import { Component } from '@angular/core';
import { communityTeams } from './entities/entities';

@Component({
  selector: 'app-community',
  standalone: false,
  templateUrl: './community.html',
  styleUrl: './community.scss',
})
export class Community {
  protected readonly teams = communityTeams;
}
