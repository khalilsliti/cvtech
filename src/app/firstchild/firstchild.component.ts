import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstchild',
  templateUrl: './firstchild.component.html',
  styleUrls: ['./firstchild.component.scss']
})
export class FirstchildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="firstChild"
  bgColor="red"
  hidden=false;
 hidediv()
  {
    this.hidden=!this.hidden 
  }
}
