import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-tareas',
  templateUrl: './main-tareas.component.html',
  styles: ['.main { min-height: 30rem; }']
})
export class MainTareasComponent implements OnInit {

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

  // respuesta a los eventos en el componente item
  addTarea (sTarea) {
    this.aTareas.push(sTarea);
    this.actualizaStorage();
  }

  // respuesta a los eventos en el componente lista
  deleteTarea (i) {
    this.aTareas.splice(i, 1);
    this.actualizaStorage();
  }

  private actualizaStorage() {
    localStorage.setItem('tareas', JSON.stringify(this.aTareas));
  }
}
