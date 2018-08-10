import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  message:string="hello world"
  @Output() MessageEvent=new EventEmitter<string>();
  sendmessage()
  {
    this.MessageEvent.emit(this.message);
  }
}
