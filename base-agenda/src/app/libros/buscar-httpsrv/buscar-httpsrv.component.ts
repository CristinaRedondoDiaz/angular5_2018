import { Component, OnInit } from '@angular/core';
import { LibrosV5Service } from '../../services/libros-v5.service';

@Component({
  selector: 'app-buscar-httpsrv',
  templateUrl: './buscar-httpsrv.component.html',
  styleUrls: ['./buscar-httpsrv.component.css'],
})
export class BuscarHttpsrvComponent implements OnInit {

  aLibros: Array<string>;
  sClave: string;

  constructor(public libros: LibrosV5Service) { }

  ngOnInit() {
    this.aLibros = [];
  }

  btnBuscar() {
    this.aLibros = [];
    this.libros.buscar(this.sClave)
    .then((response) => {
      this.aLibros = response;
    });
  }
}
