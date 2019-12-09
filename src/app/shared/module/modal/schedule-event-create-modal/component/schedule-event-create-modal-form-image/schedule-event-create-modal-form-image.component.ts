// Core Modules
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

// Third Party Modules

// Enums

@Component({
  selector: 'buffer--schedule-event-create-modal-form-image',
  templateUrl: './schedule-event-create-modal-form-image.component.html',
  styleUrls: ['./schedule-event-create-modal-form-image.component.scss']
})
export class ScheduleEventCreateModalFormImageComponent implements OnInit {
  eventCreateTypeImageForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.eventCreateTypeImageForm = this.buildEventCreateImageForm();
  }

  ngOnInit() {}

  private buildEventCreateImageForm(): FormGroup {
    return this.formBuilder.group({
      postText: new FormControl('', Validators.required)
    });
  }
}
