import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaceComponent } from './space/space.component';

@NgModule({
  declarations: [
    AppComponent,
    SpaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
