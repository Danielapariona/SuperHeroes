import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-search-heroe',
  templateUrl: './search-heroe.component.html',
  styleUrls: ['./search-heroe.component.css']
})
export class SearchHeroeComponent implements OnInit {

  heroes: any[] = [];
  termino: string;
  constructor(private _activatedRouter: ActivatedRoute, private _router: Router, private _heroes: HeroesService) { }

  ngOnInit() {
    this._activatedRouter.params.subscribe(params => {
      this.termino = params['nombre'];
      this.heroes = this._heroes.searchHeroes(this.termino);
    });
  }

  verHeroes(idx: number) {
    this._router.navigate(['/heroe', idx]);
  }
}
