import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticateService } from './services/authenticate.service';



@NgModule({
  declarations: [],

  imports: [
    CommonModule
  ],

  providers: [
    AuthenticateService
  ]
})
export class CoreModule { }
