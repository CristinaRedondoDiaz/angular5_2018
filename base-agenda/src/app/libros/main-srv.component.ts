import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-srv',
  template: `
  <article class="container">
    <div class="row">
      <app-buscar-libros class="col-6"></app-buscar-libros>
    </div>
    <div class="row">
      <app-buscar-google class="col-6"></app-buscar-google>
      <app-buscar-httpsrv class="col-6"></app-buscar-httpsrv>
    </div>
  </article>
  `,
  styles: []
})
export class MainSrvComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
