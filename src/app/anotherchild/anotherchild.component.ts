import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-anotherchild',
  templateUrl: './anotherchild.component.html',
  styleUrls: ['./anotherchild.component.scss']
})
export class AnotherchildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() childproperty;
  @Output() senddatafromanotherchildtoanotherparent= new EventEmitter()
  senddata()
  {
    this.senddatafromanotherchildtoanotherparent.emit({value:"i love you my anotherparent"})
  }
  
}
