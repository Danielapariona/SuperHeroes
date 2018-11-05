import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  @Input() heroe: any = {};
  constructor(private _router: Router) { }

  ngOnInit() { }

  verHeroes(idx: number) {
    this._router.navigate(['/heroe', idx]);
  }
}
