import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContactosComponent } from './main-contactos.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MainContactosComponent,
     ListaComponent
  ],
  exports: [
    MainContactosComponent
  ]
})
export class ContactosModule { }
