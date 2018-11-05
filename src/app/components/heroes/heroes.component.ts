import { Component, OnInit } from '@angular/core';
import { HeroesService, IHeroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: IHeroe[] = [];

  constructor(private _heroesService: HeroesService, private _router: Router) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroes(idx: number) {
    this._router.navigate(['/heroe', idx]);
    console.log('heroes', idx);
  }
}
