import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './pages/form/form.component';
import { ListComponent } from './pages/list/list.component';
import { AntiHeroRoutingModule } from './anti-hero-routing.module';
import { AntiHeroFormComponent } from './components/anti-hero-form/anti-hero-form.component';
import { AntiHeroListComponent } from './components/anti-hero-list/anti-hero-list.component';



@NgModule({
  declarations: [
    FormComponent,
    ListComponent,
    AntiHeroFormComponent,
    AntiHeroListComponent
  ],

  imports: [
    CommonModule,
    AntiHeroRoutingModule
  ]
  
})
export class AntiHeroModule { }
