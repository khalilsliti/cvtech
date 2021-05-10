import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondchild',
  templateUrl: './secondchild.component.html',
  styleUrls: ['./secondchild.component.scss']
})
export class SecondchildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hidden=false
title="secondChild"
bgColor="yellow"
hide()
{
  this.hidden=!this.hidden
}


}
