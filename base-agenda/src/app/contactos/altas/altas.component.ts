import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Contacto } from '../../models/contactos';

@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.css']
})
export class AltasComponent implements OnInit {


  @ViewChild('form1') formUser: any;
  oContacto: Contacto;
  oValidado: Object;
  @Output() outAddContacto: EventEmitter<Contacto>;

  constructor() {
    this.outAddContacto = new EventEmitter();
   }

  ngOnInit() {
    this.resetContacto();
    this.oValidado = {'was-validated': true};
    console.log(this.formUser);
  }

  enviar() {
    console.log('Datos enviados');
    this.outAddContacto.emit(this.oContacto);
    this.resetContacto();
    this.formUser.reset();
  }

  btnBorrar() {
    this.formUser.reset();
  }

  private resetContacto() {
    this.oContacto = {nombre: '', apellido: '', telefono: '', email: ''};
  }
}
