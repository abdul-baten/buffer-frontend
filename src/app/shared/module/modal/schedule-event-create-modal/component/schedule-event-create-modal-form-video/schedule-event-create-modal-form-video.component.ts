// Core Modules
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'buffer--schedule-event-create-modal-form-video',
  templateUrl: './schedule-event-create-modal-form-video.component.html',
  styleUrls: ['./schedule-event-create-modal-form-video.component.scss']
})
export class ScheduleEventCreateModalFormVideoComponent implements OnInit {
  eventCreateTypeVideoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.eventCreateTypeVideoForm = this.buildEventCreateVideoForm();
  }

  ngOnInit() {}

  private buildEventCreateVideoForm(): FormGroup {
    return this.formBuilder.group({
      postText: new FormControl('', Validators.required)
    });
  }
}
