import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'counter',
  template: `
    <div>
     <button (click)="decrease()">-</button>
     <span>{{counterValue}}</span>
     <button (click)="increase()">+</button>
    </div>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
   @Input() counterValue: number;

   @Output() counterChange: EventEmitter<number>;

   @Input() componentCounterValue:number;
  constructor() { 
      this.counterChange = new EventEmitter();
  }

  increase(){
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
    return false;
  }

  decrease(){
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
    return false;
  }
  ngOnInit() {
    
  }

}
