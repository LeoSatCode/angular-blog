import { Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: false,
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  newsTitle: string = "";
  photoCover: string = "";
  photo?: string [] = [];
  newsDescription: string[] = [];

  private id: string | null = "0"

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get('id')
    )

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id === id)[0];

    this.newsTitle = result.title
    this.photoCover = result.photoCover
    this.photo = Array.isArray(result.photo) ? result.photo : [result.photo]
    this.newsDescription = Array.isArray(result.description) ? result.description : [result.description]


  }

}
