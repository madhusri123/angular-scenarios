import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {
  title = 'scenario2';
 private values="";


onKey(value: string) {
    this.values += value;
   // console.log(this.values);
  }
}