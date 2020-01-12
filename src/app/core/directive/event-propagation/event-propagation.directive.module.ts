// Core Modules
import { NgModule } from '@angular/core';

// Directive
import { EventPropagationDirective } from './event-propagation.directive';

@NgModule({
  declarations: [EventPropagationDirective],
  exports: [EventPropagationDirective],
})
export class EventPropagationDirectiveModule {}
