import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
// Componentes
import { MainSrvComponent } from './main-srv.component';
import { BuscarLibrosComponent } from './buscar-libros/buscar-libros.component';
import { BuscarGoogleComponent } from './buscar-google/buscar-google.component';
import { BuscarHttpsrvComponent } from './buscar-httpsrv/buscar-httpsrv.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [
    MainSrvComponent,
    BuscarLibrosComponent,
    BuscarGoogleComponent,
    BuscarHttpsrvComponent
  ],
  exports: [
    MainSrvComponent
  ]
})
export class LibrosModule { }
