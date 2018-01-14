import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainTareasComponent } from './main-tareas.component';
import { ListaComponent } from './lista/lista.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MainTareasComponent,
    ListaComponent,
    ItemComponent
  ],
  exports: [
    MainTareasComponent
  ]
})
export class Tareas2Module { }
