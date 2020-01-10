// Core Modules
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'buffer--schedule-event-create-modal-form-header',
  templateUrl: './schedule-event-create-modal-form-header.component.html',
  styleUrls: ['./schedule-event-create-modal-form-header.component.scss']
})
export class ScheduleEventCreateModalFormHeaderComponent implements OnInit {
  @Input() formHeader = '';
  @Input() formHeaderIcon = '';
  @Output() closeChooseTypeModal = new EventEmitter<any>();

  value = of(80);
  bufferValue = of(85);

  constructor() {}

  ngOnInit() {}

  onChooseTypeModalClosed(): void {
    this.closeChooseTypeModal.emit();
  }
}
