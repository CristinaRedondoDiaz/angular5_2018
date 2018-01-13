import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-acumulador',
  templateUrl: './acumulador.component.html',
  styleUrls: ['./acumulador.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AcumuladorComponent implements OnInit {
  nTotal: number;
  nIncremento: number;
  oColores: any;
  constructor() { }

  ngOnInit() {
    this.nTotal = 0;
    this.nIncremento = 1;
    this.inicializaColores();
  }

  btn(oEvento) {
    switch (oEvento.target.id) {
      case 'sumar':
        this.nTotal += +this.nIncremento;
        break;
      case 'restar':
        this.nTotal -= this.nIncremento;
        break;
    }

   this.inicializaColores();
  }

 inicializaColores () {
  this.oColores = {positivo: this.nTotal >= 0,
    negativo: this.nTotal < 0};
 }
}
