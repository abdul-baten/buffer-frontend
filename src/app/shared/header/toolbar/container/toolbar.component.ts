import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { I_CONNECTION_SELECTED } from 'src/app/core/model';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--toolbar',
  styleUrls: ['./toolbar.component.css'],
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent implements OnChanges {
  @Input() backButton: boolean = true;
  @Input() headerTitle: string = '';
  @Input() showConnections: boolean = true;
  @Output() connectionSelected = new EventEmitter<I_CONNECTION_SELECTED>();

  constructor(private readonly location: Location, private readonly router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.backButton = changes.backButton.currentValue;
    this.headerTitle = changes.headerTitle.currentValue;
    this.showConnections = changes.showConnections.currentValue;
  }

  backClicked(): void {
    this.location.back();
  }

  isConnectionSelected(event: any) {
    this.connectionSelected.emit(event);
  }

  navigate(): void {
    this.router.navigate(['connection/profiles']);
  }
}
