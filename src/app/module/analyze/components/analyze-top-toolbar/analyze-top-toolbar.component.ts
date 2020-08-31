import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'buffer--analyze-top-toolbar',
  styleUrls: ['./analyze-top-toolbar.component.scss'],
  templateUrl: './analyze-top-toolbar.component.html',
})
export class AnalyzeTopToolbarComponent {
  constructor(private location: Location) {}

  backClicked(): void {
    this.location.back();
  }
}
