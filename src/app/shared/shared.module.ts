import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './layout/footer/footer.component';
import { MaterialModule } from '../material/material.module';





@NgModule({
  declarations: [
    FooterComponent
  ],

  imports: [
    CommonModule,
    MaterialModule

   
  ],

  exports: [
    FooterComponent,

    
  ]
})
export class SharedModule { }
