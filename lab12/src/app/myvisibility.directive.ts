import { Directive,Input,HostBinding,HostListener } from '@angular/core';



@Directive({
  selector: '[myvisibility]'
})
export class MyvisibilityDirective {
  @Input('myvisibility') mvis:boolean;
  @HostBinding('style.display') vis;

  constructor() { 
    
  }

  ngOnInit(){
    if(this.mvis){
      this.vis ='block';
      console.log(this.mvis);
    }
    else{
      this.vis='none';
      console.log(this.mvis);
    }
  }
  
  // @HostListener('mouseenter') hide(){
  //   this.vis='hidden';
  // }

  // @HostListener('mouseleave') show(){
  //   this.vis='visible';
  // }

  @HostListener('click') show(){
    if(this.mvis) this.vis='visible';
    else this.vis ='hidden';
  }
}
