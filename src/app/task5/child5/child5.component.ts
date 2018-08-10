import { Component ,ViewChild,AfterViewInit} from '@angular/core';
import {Subchild5Component} from '../subchild5/subchild5.component'
@Component({
  selector: 'app-child5',
  templateUrl: './child5.component.html',
  styleUrls: ['./child5.component.css']
})
export class Child5Component implements AfterViewInit {

  @ViewChild(Subchild5Component) subchild;

  constructor() { }

 
  message=""
 
  receivemessage($event)
  {
  this.message=$event
  }
  

  ngAfterViewInit()
  {
this.message=this.subchild.message;
  }
}
