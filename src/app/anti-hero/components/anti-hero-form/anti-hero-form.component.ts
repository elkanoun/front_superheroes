import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-anti-hero-form',
  templateUrl: './anti-hero-form.component.html',
  styleUrl: './anti-hero-form.component.css'
})
export class AntiHeroFormComponent implements OnInit {
  @Input() selectedId = "";
  @Input() actionButtonLabel: string = 'Create';
  @Output() action = new EventEmitter();
  form!: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      id: [''],
      firstName: [''],
      lastName: [''],
      house: [''],
      knownAs: ['']
    })
  }

  ngOnInit(): void {
    
  }

  checkAction() {
    if(this.selectedId) {
      this.actionButtonLabel = "Update";
      this.patchDataValues();
    }
  }

  patchDataValues () {
    //this will be implemented in the future (for update feature)
   // this.form.patchValue();
  }

  emitAction() {
    this.action.emit({value: this.form.value, action: this.actionButtonLabel})
  }

  clear() {
    this.form.reset();
 }

}
