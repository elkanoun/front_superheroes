import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AntiHero } from '../../models/anti-hero.interface';
import { TableActions } from '../../enums/table-actions.enum';

@Component({
  selector: 'app-anti-hero-list',
  templateUrl: './anti-hero-list.component.html',
  styleUrl: './anti-hero-list.component.css'
})
export class AntiHeroListComponent implements OnInit {
  @Input() headers: Array<{headerName:string, fieldName:keyof AntiHero}> = [];
  @Input() antiHeroes: Array<AntiHero> = [];
  @Output() antiHero = new EventEmitter<{antiHero: AntiHero, action: TableActions}>();
  headerFields: string[] = [];

  constructor(){
  }

  ngOnInit(): void {
    this.getHeaderFields();
  }

  //method getHeaderFields
  getHeaderFields() {
    this.headerFields = this.headers.map((data) =>
    data.fieldName);
    this.headerFields.push("actions");
  }

  //method selectAntiHero
  selectAntiHero(antiHero: AntiHero, action: TableActions){
    this.antiHero.emit({antiHero, action});
  }


}
