import {Component, Input, OnInit} from '@angular/core';
import {Coment} from "../../models/coment";

@Component({
  selector: 'app-coment',
  templateUrl: './coment.component.html',
  styleUrls: ['./coment.component.css']
})
export class ComentComponent implements OnInit {
@Input()
com:Coment;

  constructor() { }
yyy(coment:Coment):void{
  console.log(coment);

}


  ngOnInit(): void {
  }

}
