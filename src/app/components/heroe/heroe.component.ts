import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(private _activatedRouter: ActivatedRoute, private _heroes: HeroesService) {
  }

  ngOnInit() {
    this._activatedRouter.params.subscribe(params => {
      this.heroe = this._heroes.getHeroe(params['id']);
      console.log('vista heroe', params['id']);
    });
  }

}
