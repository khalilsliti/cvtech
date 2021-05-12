import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
  monObservable : Observable<any>;
  mesimages=["cv.jpg","tim_logo.png","rotating_card_profile.png"]
  currentimage:String
  constructor() { }

  ngOnInit(): void {
    let i= this.mesimages.length -1;
    this.monObservable=new Observable((observer)=>{setInterval(
      ()=>{
        observer.next(this.mesimages[i])
        if (i>0)
        {i--;}
        else
        {i= this.mesimages.length-1}
      
      },1500)})
    console.log("this is the created observable ",this.monObservable)
    let subscription=this.monObservable.subscribe((result)=>
    { console.log(result)
      this.currentimage=result;
      console.log("the subscription will finish in seconds" )
    })
    setTimeout(()=>{subscription.unsubscribe()},10000)
  
  }

}
