import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AntiHero } from '../../../core/models/anti-hero.interface';

@Component({
  selector: 'app-anti-hero-list',
  templateUrl: './anti-hero-list.component.html',
  styleUrl: './anti-hero-list.component.css'
})
export class AntiHeroListComponent implements OnInit {
  @Input() headers: Array<{headerName:string, fieldName:keyof AntiHero}> = [];
  @Input() antiHeroes: Array<AntiHero> = [];
  @Output() antiHero = new EventEmitter();

  constructor(){

  }

  ngOnInit(): void {
    
  }

  //method selectAntiHero
  selectAntiHero(antiHero: AntiHero){
    this.antiHero.emit(antiHero);
  }


}
