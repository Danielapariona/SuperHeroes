import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;
  // @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();
  @Output() heroeSelected: EventEmitter<number> = new EventEmitter<any>(); // va a emitir un número (index)
  constructor(private _router: Router) {}

  ngOnInit() {
    // this.heroeSelected = new EventEmitter();
    // @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();
  }

  verHeroes() {
    // this._router.navigate(['/heroe', idx]);
    this.heroeSelected.emit(this.index);
    // this.onSubmit.emit(this.model);
  }
}
