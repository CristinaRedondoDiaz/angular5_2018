import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainContactosComponent } from './main-contactos.component';
import { ListaComponent } from './lista/lista.component';
import { AltasComponent } from './altas/altas.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MainContactosComponent,
     ListaComponent,
     AltasComponent
  ],
  exports: [
    MainContactosComponent
  ]
})
export class ContactosModule { }
