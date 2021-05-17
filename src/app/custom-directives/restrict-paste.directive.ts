import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appRestrictPaste]'
})
export class RestrictPasteDirective {

  constructor() { }
  
  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
    e.preventDefault();
  }
}
