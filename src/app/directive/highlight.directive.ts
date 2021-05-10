import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  
  constructor() { }
  @HostBinding('style.backgroundColor') bgcolor="";
  @HostListener('mouseenter') mousenter()  {
    this.bgcolor="red";
  }
  @HostListener('mouseleave') mouseleave(){this.bgcolor="lightblue"}


}
