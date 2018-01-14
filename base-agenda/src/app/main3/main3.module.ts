import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Main3Component } from './main3.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    Main3Component,
    PipesComponent],
  exports : [
    Main3Component
  ]
})
export class Main3Module { }
