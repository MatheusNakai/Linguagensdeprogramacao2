import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OlaAangularComponent } from './ola-angular/ola-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    OlaAangularComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
