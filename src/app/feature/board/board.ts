import { Component } from '@angular/core';
import { boardDescriptions } from './entities/entities';

@Component({
  selector: 'app-board',
  templateUrl: './board.html',
  styleUrl: './board.scss',
  standalone:false
})
export class Board {
  protected readonly descriptions = boardDescriptions;
}
