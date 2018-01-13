import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
  <div class="container">
    <div class="row align-items-center main">
      <div class="col text-center">
        <p>contenido principal</p>
      </div>
    </div>
  </div>`,
  styles: ['.main { min-height: 10rem; }'],
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
