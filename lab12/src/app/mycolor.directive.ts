import { Directive,HostBinding,EventEmitter,HostListener, Output} from '@angular/core';


@Directive({
  selector: '[mycolor]'
})
export class MycolorDirective {
  @HostBinding('style.color') value;
  colors:[string];
  @Output() color:EventEmitter<string>;
  randNumber:number;
  constructor() { 
      this.color = new EventEmitter();
      this.colors =['red','green','blue','yellow','black'];
  }

  ngOnInit(){

  }
  @HostListener('click') changeColor(){
    let i = Math.floor(Math.random()* (this.colors.length - 1));
    this.color.emit(this.colors[i]);
    this.value=this.colors[i];
  }


}
