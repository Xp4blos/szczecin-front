import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[mes]'
})
export class MessageDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = '#ff6600';
    this.el.nativeElement.style.color = 'white'
    this.el.nativeElement.style.textAlign = 'right'
    this.el.nativeElement.style.marginLeft = '63%'
    
  }

}
