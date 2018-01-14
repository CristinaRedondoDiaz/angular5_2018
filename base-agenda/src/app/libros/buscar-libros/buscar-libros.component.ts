import { Component, OnInit } from '@angular/core';
import { LibrosMockService } from '../../services/libros-mock.service';
import { WrapperMockService } from '../../services/wrapper-mock.service';

@Component({
  selector: 'app-buscar-libros',
  templateUrl: './buscar-libros.component.html',
  styleUrls: ['./buscar-libros.component.css'],
})
export class BuscarLibrosComponent implements OnInit {

  // aLibros: Array<string>;
  aLibros: any;
  sClave: string;

  constructor(public librosMockService: LibrosMockService, 
              public wrapperMockService: WrapperMockService) { }

  ngOnInit() {
    this.aLibros = [];
    this.sClave = 'Angular';
  }

  btnBuscar() {
    this.aLibros = [];
    this.aLibros =
      this.librosMockService.buscarLibro(this.sClave);
  }

  btnBuscarIndirecto() {
    this.aLibros = [];
    this.aLibros =
      this.wrapperMockService.buscarLibro(this.sClave);
  }

  btnBuscarAsinc() {
    this.aLibros = [];
     this.librosMockService.buscarLibrosAsync(this.sClave)
     .then(
       (response) => {
          console.log(response);
          this.aLibros = response;
        }, // función OK
       (error) => { console.log(error); } // funcion error
     );
  }
}
