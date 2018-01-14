import { Component, OnInit } from '@angular/core';
import { Contacto } from '../models/contactos';
import { ContactosService } from '../services/contactos.service';

@Component({
  selector: 'app-main-contactos',
  templateUrl: './main-contactos.component.html',
  styles: ['.main { min-height: 30rem; }']
})
export class MainContactosComponent implements OnInit {

  aContactos: Array<Contacto>;
  sContacto: string;

  constructor(public contactosService: ContactosService) { }

  ngOnInit() {
     this.aContactos = this.contactosService.getContactos();

  }

  // respuesta a los eventos en el componente lista
  deleteTarea (i) {
    this.contactosService.deleteContacto(i);
    this.aContactos = this.contactosService.getContactos();
  }

/*   // respuesta a los eventos en el componente item
  addTarea (sTarea) {
    this.aTareas.push(sTarea);
  }
*/
}

