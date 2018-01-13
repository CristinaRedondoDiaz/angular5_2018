// Modulos de Angular
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
// Modulos de la aplicación
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';
import { Main2Module } from './main2/main2.module';
import { ComunicsModule } from './comunics/comunics.module';
import { TareasModule } from './tareas/tareas.module';
// Componente principal
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MainModule,
    Main2Module,
    ComunicsModule,
    TareasModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
