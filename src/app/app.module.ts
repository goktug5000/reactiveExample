import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormExComponent } from './form-ex/form-ex.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormExComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [FormExComponent]
})
export class AppModule { }
