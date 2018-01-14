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
import { Tareas2Module } from './tareas2/tareas2.module';
import { Main3Module } from './main3/main3.module';
import { FormulariosModule} from './formularios/formularios.module';
import { LibrosModule } from './libros/libros.module';
import { ContactosModule } from './contactos/contactos.module';
// Servicios de la aplicación
import { LibrosMockService } from './services/libros-mock.service';
import { WrapperMockService } from './services/wrapper-mock.service';
import { LibrosV5Service } from './services/libros-v5.service';
import { ContactosService } from './services/contactos.service';
// Componente principal
import { AppComponent } from './app.component';
// Enrutador
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MainModule,
    Main2Module,
    ComunicsModule,
    TareasModule,
    Tareas2Module,
    Main3Module,
    FormulariosModule,
    LibrosModule,
    ContactosModule,
    SharedModule
  ],
  providers: [
    LibrosMockService,
    WrapperMockService,
    LibrosV5Service,
    ContactosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
