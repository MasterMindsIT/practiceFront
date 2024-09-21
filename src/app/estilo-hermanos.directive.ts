import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEstiloHermanos]'
})
export class EstiloHermanosDirective {

  constructor(private el:ElementRef) { 
    this.el.nativeElement.style.backgroundColor = 'yellow'
  }

}
