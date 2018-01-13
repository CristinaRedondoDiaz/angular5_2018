import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  template: `
  <article class="container">
    <div class="row">
      <app-lista class="col-6"></app-lista>
      <app-lista-v4 class="col-6"></app-lista-v4>
    </div>
    <div class="row">
      <app-lista-xtend class="col-6"></app-lista-xtend>
      <app-acumulador class="col-6"></app-acumulador>
    </div>
  </article>
  `,
  styles: []
})
export class TareasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
