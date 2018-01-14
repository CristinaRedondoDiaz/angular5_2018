import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContactosComponent } from './contactos/main-contactos.component';
import { MainTareasComponent } from './tareas2/main-tareas.component';
import { MainComponent } from './main/main.component';
import { FormPrinterComponent } from './formularios/form-printer/form-printer.component';
import { BindingComponent } from './main2/binding/binding.component';
import { BuscarHttpsrvComponent } from './libros/buscar-httpsrv/buscar-httpsrv.component';

const routes: Routes = [
  { path: 'inicio', component: BindingComponent },
  { path: 'contactos', component: MainContactosComponent },
  { path: 'tareas', component: MainTareasComponent },
  { path: 'libros', component: BuscarHttpsrvComponent },
  { path: 'imprimir', component: FormPrinterComponent },
  { path: 'about', component: MainComponent },
  { path: '', pathMatch: 'full', redirectTo: 'Inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
