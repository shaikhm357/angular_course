import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WanningAlertComponent } from './wanning-alert/wanning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component'

@NgModule({
  declarations: [
    AppComponent,
    WanningAlertComponent,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
