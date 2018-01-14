import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PipesComponent implements OnInit {
  sNombre: string;
  nValor: number;
  nPrecio: number;
  nPerc: number;
  dFecha: Date;
  oDato: Object;

  constructor() { }

  ngOnInit() {
    this.sNombre = 'Pepe perez';
    this.nValor = 30.876;
    this.nPrecio = 4.50;
    this.nPerc = 0.3476;
    this.dFecha = new Date();
    this.oDato = {nombre: 'Pepe',
                  apellidos: 'Perex'};
  }

}
