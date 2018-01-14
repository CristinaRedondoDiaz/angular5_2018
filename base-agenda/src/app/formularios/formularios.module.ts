import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainFormsComponent } from './main-forms.component';
import { FormPrinterComponent } from './form-printer/form-printer.component';
import { FormUserComponent } from './form-user/form-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MainFormsComponent,
    FormPrinterComponent,
    FormUserComponent
  ],
  exports: [
    MainFormsComponent,
  ]
})
export class FormulariosModule { }
