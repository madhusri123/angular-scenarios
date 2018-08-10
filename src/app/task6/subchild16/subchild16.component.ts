import { Component, OnInit,EventEmitter,Output,Injectable} from '@angular/core';

@Component({
  selector: 'app-subchild16',
  templateUrl: './subchild16.component.html',
  styleUrls: ['./subchild16.component.css']
})
@Injectable()
export class Subchild16Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  inputVal="hi there ";
  value:string;
  
  usablecode()
  {
    this.value=this.inputVal
return this.value;
}

}
