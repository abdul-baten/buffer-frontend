import { EventPropagationDirective } from './event-propagation.directive';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [EventPropagationDirective],
  exports: [EventPropagationDirective],
})
export class EventPropagationDirectiveModule {}
