import { Component, OnInit,Input } from '@angular/core';
import {  } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styles: []
})
export class ItemsComponent implements OnInit {
  color:string;
  @Input() colors:Array<string> =['Red', 'Green','Blue','Yellow'];
  constructor() { }

  changeColr(event){
    this.color = event;
  }
  ngOnInit() {
  }

}
