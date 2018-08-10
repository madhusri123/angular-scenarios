import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subchild5',
  templateUrl: './subchild5.component.html',
  styleUrls: ['./subchild5.component.css']
})
export class Subchild5Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  message:string="hello world"
  @Output() MessageEvent=new EventEmitter<string>();
  sendmessagesubchild()
  {
    this.MessageEvent.emit(this.message);
  }
}
