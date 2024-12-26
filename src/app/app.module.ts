import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { MaterialModule } from './material/material.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,

    StoreModule.forRoot({}, {}),

    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),

    EffectsModule.forRoot([])
    

    
   
    
  ],

  providers: [
    provideAnimationsAsync()
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
