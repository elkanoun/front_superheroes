import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  userForm! : FormGroup;

  constructor(){
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      email: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl()
    })
  }

  //method onSubmit(userForm)
  onSubmit(userForm: any){
    console.log(userForm.value);
  }

 
}
