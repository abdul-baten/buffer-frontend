import { Component } from '@angular/core';

@Component({
  selector: 'buffer--profile-change',
  templateUrl: './profile-change.component.html',
  styleUrls: ['./profile-change.component.scss'],
})
export class ProfileChangeComponent {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }
}
