import { Directive,HostBinding } from '@angular/core';


@Directive({
  selector: '[upper]'
})
export class UpperDirective {

  @HostBinding('style.text-transform') text;


  constructor() {
    this.text='uppercase';
   }

}
