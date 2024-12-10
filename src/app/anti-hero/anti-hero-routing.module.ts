import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { FormComponent } from './pages/form/form.component';


const routes : Routes = [
  {
    path: "",
    component: FormComponent
  },
  {
    path: "form",
    component: ListComponent
  }
]


@NgModule({
  declarations: [
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

  exports: [RouterModule]
})
export class AntiHeroRoutingModule { }
