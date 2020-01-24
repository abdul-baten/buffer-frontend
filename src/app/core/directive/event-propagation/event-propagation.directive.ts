// Core Modules
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[bufferEventPropagation]',
})
export class EventPropagationDirective {
  constructor() {}

  @HostListener('keypress', ['$event'])
  onKeyPressedOnInputField(event: KeyboardEvent) {
    event.stopPropagation();
  }
}
