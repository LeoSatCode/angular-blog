import { Component, OnInit } from '@angular/core';
import { dataFakeSmallCard } from './data/dataFake-SmallCard';
import { newsCardsData } from './data/dataFake-Card';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bigCardId = '1'
  smallCards: { id: string; title: string; photoCover: string; }[] = [];
  newsCards: { id: string; photo: string; title: string; description: string; }[] = []

  constructor() { }

  ngOnInit(): void {
    this.smallCards = dataFakeSmallCard;
    this.newsCards = newsCardsData;
  }
}
