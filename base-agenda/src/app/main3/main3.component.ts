import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main3',
  template: `
  <article class="container">
    <div class="row">
      <app-pipes class="col-6"></app-pipes>
    </div>
  </article>`,
  styles: ['.main { min-height: 10rem; }'],
})
export class Main3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
