import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { checkHasNumberValidator } from '../../../shared/validateurs/checkHasNumberValidator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  heroForm! : FormGroup;
  address! : FormGroup;
  itemForm! : FormGroup;

  constructor(private fb: FormBuilder){
    this.heroForm = this.fb.group({
      items: this.fb.array([]),
    });
  }

  

  // Getter pour récupérer le FormArray
  get items(): FormArray {
    return this.heroForm.get('items') as FormArray;
  }

  //method  addPower
  addItem(): void{
    this.itemForm = this.fb.group({
      firstName: ['', [checkHasNumberValidator]],
      lastName: ['', [checkHasNumberValidator]],
      knownAs:['', [checkHasNumberValidator]],
      address: this.fb.group({
        street:[''],
        city:[''],
        country:['']
    })
  })
  this.items.push(this.itemForm);
}
  //method  deletePower
  removeItem(i: number): void{
    this.items.removeAt(i);
  }

  //method onSubmit(userForm)
  onSubmit(heroForm: any){
    console.log(heroForm.value);
  }

 
}
