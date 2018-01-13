import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareasComponent } from './tareas.component';
import { ListaComponent } from './lista/lista.component';
import { ListaV4Component } from './lista-v4/lista-v4.component';
import { ListaXtendComponent } from './lista-xtend/lista-xtend.component';
import { AcumuladorComponent } from './acumulador/acumulador.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TareasComponent,
    ListaComponent,
    ListaV4Component,
    ListaXtendComponent,
    AcumuladorComponent
  ],
  exports: [
    TareasComponent,
  ]
})
export class TareasModule { }
