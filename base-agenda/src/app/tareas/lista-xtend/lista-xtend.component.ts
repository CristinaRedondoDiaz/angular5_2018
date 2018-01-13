import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-xtend',
  templateUrl: './lista-xtend.component.html',
  styleUrls: ['./lista-xtend.component.css']
})
export class ListaXtendComponent implements OnInit {

  aTareas: Array<string>;
  sTarea: string;

  constructor() { }

  ngOnInit() {
    // si existe se extrae de localStorage
    if (localStorage.getItem('tareas')) {
      this.aTareas = JSON.parse(localStorage.getItem('tareas'));
    } else {
      this.aTareas = [];
    }
  }

  addTarea () {
    this.aTareas.push(this.sTarea);
    this.actualizaStorage();
    this.sTarea = '';
  }

  deleteTarea (i) {
    this.aTareas.splice(i, 1);
    this.actualizaStorage();
  }

  private actualizaStorage() {
    localStorage.setItem('tareas', JSON.stringify(this.aTareas));
  }
}
