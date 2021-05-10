import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  tableau =[
    "blue",
    "lightblue",
    "coral",
    "pink",
    "green",
    "lightyellow",
    "gold",
    "gray",
    "lightgray",
    "purple"
  ]
  @HostBinding('style.borderColor') bc
  @HostBinding('style.color') color
  @HostListener('keypress') changecolor()
  {
    const  index = Math.random()*(this.tableau.length-1)
    const   x=Math.floor(index)
    console.log(x)
    this.bc=this.tableau[x];
    const  cindex = Math.random()*(this.tableau.length-1)
    const   y=Math.floor(cindex)
    console.log(y)
    this.color=this.tableau[y];

  }
  constructor() { }

}
