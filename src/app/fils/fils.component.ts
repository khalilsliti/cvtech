import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.scss']
})
export class FilsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() filsProperty;   //this means that the property can be seen from all the parent components 
  @Output() sendfromfilstoparent = new EventEmitter()  // the idea is to send an event from child to parent and bind the data that we want to save to this 
                                                        //event and in the parent component we can retrive the data because the event flow by default is from child to parent etc

sendEvent()
{
  this.sendfromfilstoparent.emit(
    {message:"please give me some moeny dad"}
  )
}


}
