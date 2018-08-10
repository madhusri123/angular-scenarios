import { Component, ViewChild,AfterViewInit } from '@angular/core';
import { Child5Component } from '../child5/child5.component';

@Component({
  selector: 'app-parent5',
  templateUrl: './parent5.component.html',
  styleUrls: ['./parent5.component.css']
})
export class Parent5Component implements AfterViewInit {

  @ViewChild(Child5Component) child;
  constructor() { }
  message="";

  receivemessage($event)
  {
  this.message=$event
  }
  
  ngAfterViewInit()
  {
this.message=this.child.message;
  }
}
