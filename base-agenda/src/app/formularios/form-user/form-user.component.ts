import { Component, OnInit, ViewChild} from '@angular/core';
import { User } from '../../models/models';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
})
export class FormUserComponent implements OnInit {

  @ViewChild('form1') formUser: any;
  oUsuario: User;
  oValidado: Object;

  constructor() { }

  ngOnInit() {
    this.oUsuario = {nombre: '', apellido: '', telefono: ''};

    this.oValidado = {'was-validated': true};
    console.log(this.formUser);
  }

  enviar() {
    console.log('Datos enviados');
  }

  btnBorrar() {
    this.formUser.reset();
  }
}
