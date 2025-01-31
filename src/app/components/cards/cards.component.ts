import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: false,

  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
[x: string]: any;
  @Input() cardId: string = "";
  @Input() photo: string = "";
  @Input() title: string = "";
  @Input() description: string = "";
}
