import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormValidatorModule } from '../../projects/validator/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormValidatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
