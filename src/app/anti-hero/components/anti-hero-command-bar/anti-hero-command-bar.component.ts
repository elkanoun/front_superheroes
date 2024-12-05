import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-anti-hero-command-bar',
  templateUrl: './anti-hero-command-bar.component.html',
  styleUrl: './anti-hero-command-bar.component.css'
})
export class AntiHeroCommandBarComponent implements OnInit {
  @Output() action = new EventEmitter();
  constructor(){

  }

  ngOnInit(): void {
    
  }

  emitAction(action: number){
    this.action.emit(action);
  }

}
