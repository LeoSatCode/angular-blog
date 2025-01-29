import { Component, Input, OnInit } from '@angular/core';
import { dataFakeBigCard } from './data/dataFake-BigCard';

@Component({
  selector: 'app-big-card',
  standalone: false,
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input() photoCover: string = "";
  @Input() cardTitle: string = "";
  @Input() cardDescription: string = "";
  @Input() cardId: string = "";

  constructor() {}

  ngOnInit(): void {
    const card = dataFakeBigCard.find(card => card.id === this.cardId);
    if (card) {
      this.photoCover = card.photoCover;
      this.cardTitle = card.cardTitle;
      this.cardDescription = card.cardDescription;
    }
  }
}
