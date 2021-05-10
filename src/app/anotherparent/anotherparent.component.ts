import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anotherparent',
  templateUrl: './anotherparent.component.html',
  styleUrls: ['./anotherparent.component.scss']
})
export class AnotherparentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  parentproperty="i love you son"
  showmessagefromanotherchild(message:any)
  {
    alert(message)
  }
}
