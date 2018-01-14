import { Component, OnInit } from '@angular/core';
import { Contacto } from '../models/contactos';

@Component({
  selector: 'app-main-contactos',
  templateUrl: './main-contactos.component.html',
  styles: ['.main { min-height: 30rem; }']
})
export class MainContactosComponent implements OnInit {

  aContactos: Array<Contacto>;
  sContacto: string;

  constructor() { }

  ngOnInit() {
    this.aContactos = [
      /* { nombre: '',
        apellido: '',
        telefono: '',
        email: ''}, */
      { nombre: 'Pepe',
        apellido: 'Pérez',
        telefono: '123-123-123',
        email: 'pperez@mail.com'},
      { nombre: 'Luis',
        apellido: 'Gomez',
        telefono: '654-654-654',
        email: 'lgomez@algo.es'}
    ];
  }

  // respuesta a los eventos en el componente lista
  deleteTarea (i) {
    this.aContactos.splice(i, 1);
    // this.actualizaStorage();
  }

/*   // respuesta a los eventos en el componente item
  addTarea (sTarea) {
    this.aTareas.push(sTarea);
    this.actualizaStorage();
  }



  private actualizaStorage() {
    localStorage.setItem('tareas', JSON.stringify(this.aTareas));
  } */

}
