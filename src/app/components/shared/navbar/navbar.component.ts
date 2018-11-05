import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  // searchHeroe: string;
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  buscarHeroe(termino: string) {
    this._router.navigate(['/search', termino ]);
  }

}
