import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';
import { I_CONNECTION } from '@core/model';
import { Observable } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--toolbar',
  styleUrls: ['./toolbar.component.scss'],
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent implements OnChanges {
  @Input() backButton = true;
  @Input() headerTitle: string;
  @Input() showConnections = true;

  connections$: Observable<I_CONNECTION[]>;
  activeConnection$: Observable<string>;

  constructor(private readonly location: Location) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.backButton = changes.backButton.currentValue;
    this.headerTitle = changes.headerTitle.currentValue;
    this.showConnections = changes.showConnections.currentValue;
  }

  backClicked(): void {
    this.location.back();
  }
}
