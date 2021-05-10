import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent implements OnInit {
  @Input() tscolor:"white"
  @Input() tsbgcolor="lightblue"
  size="30px"
  constructor() { }

  ngOnInit(): void {
  }
 changetextsize(inputsize)
 {
   this.size=inputsize+'px'
 }
}
