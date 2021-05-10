import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {
  teams=[
    "barca",
    "milan",
    "est",
    "ca",
    "argentine"
  ]
  oteams={
    "a":"barca",
    "b":"milan",
    "c":"est",
    "d":"ca",
    "e":"argentine"
}
  show=true
  est=true;
  argentine=false;
  ca=false;
  constructor() { }
  ngOnInit(): void {
  }
  changetoargentine()
  {
    this.est=false;
    this.argentine=true;
    this.ca=false;
  }
  changetoest()
  {
    this.est=true;
    this.argentine=false;
    this.ca=false;
  }
  changetoca()
  {
    this.est=false;
    this.argentine=false;
    this.ca=true;
  }
}
