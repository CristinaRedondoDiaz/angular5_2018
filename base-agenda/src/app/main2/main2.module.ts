import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Main2Component } from './main2.component';
import { BindingComponent } from './binding/binding.component';
import { LocalComponent } from './local/local.component';
import { ExpresionesComponent } from './expresiones/expresiones.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    Main2Component,
    BindingComponent,
    LocalComponent,
    ExpresionesComponent],
  exports : [
    Main2Component
  ]
})
export class Main2Module { }
