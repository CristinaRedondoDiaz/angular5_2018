import { Component, OnInit, ViewChild} from '@angular/core';
import { Impresion, Printer, Departamento } from '../../models/models';
@Component({
  selector: 'app-form-printer',
  templateUrl: './form-printer.component.html',
  styleUrls: ['./form-printer.component.css'],
})
export class FormPrinterComponent implements OnInit {

  @ViewChild('form1') formPrinter: any;
  ordenImpresion: Impresion;
  aImpresoras: Array<Printer>;
  aDepartamentos: Array<Departamento>;
  oValidado: Object;

  constructor() { }

  ngOnInit() {
    this.ordenImpresion = new Impresion (
      {codigo: '', nombre: ''},
      false,
      false,
      {codigo: '', nombre: ''}
    );

    this.aImpresoras = [
      {codigo: '001', nombre: 'HP'},
      {codigo: '002', nombre: 'Lexmark'},
      {codigo: '003', nombre: 'Brother'},
    ];

    this.aDepartamentos = [
      {codigo: 'VN', nombre: 'Ventas'},
      {codigo: 'MK', nombre: 'Marketing'},
      {codigo: 'SS', nombre: 'Sistemas'},
    ];

    this.oValidado = {'was-validated': true};
    console.log(this.formPrinter);
  }

  enviar() {
    console.log('Datos enviados');
  }

  btnBorrar() {
    this.formPrinter.reset();
  }
}
