import { Injectable } from '@angular/core';
import { LibrosMockService } from './libros-mock.service';

@Injectable()
export class WrapperMockService {

constructor (public librosMockService: LibrosMockService) {}

buscarLibro(clave: string) {
    return this.librosMockService.buscarLibro(clave);
  }


}
