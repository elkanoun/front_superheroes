import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,

    MaterialModule
    

    
   
    
  ],

  providers: [
    provideAnimationsAsync()
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
