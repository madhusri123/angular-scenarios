import { Component, OnInit,Input } from '@angular/core';
import {Subchild16Component} from '../subchild16/subchild16.component'

@Component({
  selector: 'app-subchild26',
  templateUrl: './subchild26.component.html',
  styleUrls: ['./subchild26.component.css']
})
export class Subchild26Component implements OnInit {
  output;
 

   ngOnInit() {
   }
   constructor(service:Subchild16Component) {
     this.output=service.usablecode();
      }


}
