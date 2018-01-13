import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-v4',
  templateUrl: './lista-v4.component.html',
  styleUrls: ['./lista-v4.component.css']
})
export class ListaV4Component implements OnInit {

  aTareas: Array<string>;
  sTarea: string;

  constructor() { }

  ngOnInit() {
    this.aTareas = [];
  }

  addTarea () {
    this.aTareas.push(this.sTarea);
    this.sTarea = '';
  }

}
