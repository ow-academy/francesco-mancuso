import { BrowserModule } from '@angular/platform-browser';

import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Rotta1Component } from './rotta1/rotta1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Rotta1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
