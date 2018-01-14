import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LibrosMockService {

  aLibros: Array<string>;

  constructor() {
    this.aLibros = [
      'Angular básico',
      'Angular en 19 minutos',
      'Angular avanzado'
    ];
  }

  buscarLibro(clave: string) {
    return this.aLibros;
  }

  buscarLibrosAsync(clave: string) {
    return new Promise(
      // function (resolve, reject) {}
      (resolve, reject) => {
       setTimeout(
         () => { resolve(this.aLibros); }, 2000
       );
      }
    );
   }

/*     buscarLibrosAsyncRx(clave: string) {
     return new Observable(
       (observer) => {
        setTimeout(() => {
          observer.next(this.aLibros);
          }, 2000);
       } // Fin del setTimeout
     ); // Fin del Observable
   } */

} // Fin de la clase correspondiente al servicio
