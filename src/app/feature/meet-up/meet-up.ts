import { Component } from '@angular/core';
import { Collaboration_Cards } from './entities/entities';

@Component({
  selector: 'app-meet-up',
  standalone: false,
  templateUrl: './meet-up.html',
  styleUrl: './meet-up.scss',
})
export class MeetUp {

  protected readonly cards = Collaboration_Cards;

}
