import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-forms',
  template: `
  <article class="container">
    <div class="row">
      <app-form-user class="col-6"></app-form-user>
      <app-form-printer class="col-6"></app-form-printer>
    </div>
  </article>
  `,
  styles: []
})
export class MainFormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
