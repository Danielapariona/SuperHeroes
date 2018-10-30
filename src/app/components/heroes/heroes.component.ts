import { Component, OnInit } from '@angular/core';
import { HeroesService, IHeroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: IHeroe[] = [];

  constructor(private _heroesService: HeroesService) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

}
