import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main2',
  template: `
  <article class="container">
    <div class="row">
        <app-binding class="col-6"></app-binding>
        <app-expresiones class="col-6"></app-expresiones>
        <app-local class="col-6"></app-local>
    </div>
  </article>`,
  styles: [],
})
export class Main2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
