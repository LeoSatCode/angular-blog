import { Component, OnInit } from '@angular/core';
import { dataFakeSmallCard } from './data/dataFake-SmallCard';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bigCardId = '1'
  smallCards: { id: string; title: string; photoCover: string; }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.smallCards = dataFakeSmallCard;
  }
}
