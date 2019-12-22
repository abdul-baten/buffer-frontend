// Core Modules
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Third Party Modules
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'buffer--schedule-event-create-modal-form-video',
  templateUrl: './schedule-event-create-modal-form-video.component.html',
  styleUrls: ['./schedule-event-create-modal-form-video.component.scss']
})
export class ScheduleEventCreateModalFormVideoComponent implements OnInit {
  nextButtonDisabled = true;
  @Input() formHeaderIcon = 'subscriptions';
  @Input() formHeader = 'Upload your media';

  @Output() closeChooseTypeModal = new EventEmitter<any>();

  eventCreateTypeVideoForm: FormGroup;

  constructor(private stepper: MatStepper) {}

  ngOnInit() {}

  onNextButtonClicked(): void {
    this.stepper.next();
  }

  onPreviousButtonClicked(): void {
    this.stepper.previous();
  }

  onNextButtonEnabled(nextButtonDisabled: boolean): void {
    this.nextButtonDisabled = nextButtonDisabled;
  }

  onChooseTypeModalClosed(): void {
    this.closeChooseTypeModal.emit();
  }
}
