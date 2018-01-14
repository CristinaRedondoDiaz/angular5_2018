import { Injectable } from '@angular/core';
import { Contacto } from '../models/contactos';


// El servicio contactos se ocupa de almacenar la lista de contactos

@Injectable()
export class ContactosService {

    private aContactos: Array<Contacto>;

    constructor () {
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

    getContactos() {
        return this.aContactos;
    }

    setContactos(oContacto) {
        this.aContactos.push(oContacto);
    }

    deleteContacto (i) {
        this.aContactos.splice(i, 1);
      }
}
