import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { I_CONNECTION, I_CONNECTION_SELECTED } from 'src/app/core/model';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--toolbar',
  styleUrls: ['./toolbar.component.css'],
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent implements OnChanges {
  @Input() backButton = true;
  @Input() headerTitle: string;
  @Input() showConnections = true;
  @Output() connectionSelected = new EventEmitter<I_CONNECTION_SELECTED>();

  connections$: Observable<I_CONNECTION[]>;
  activeConnection$: Observable<string>;

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
