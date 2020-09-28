import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--analyze-card',
  styleUrls: ['./analyze-card.component.scss'],
  templateUrl: './analyze-card.component.html',
})
export class AnalyzeCardComponent implements OnChanges {
  @Input() cardCounter: number;
  @Input() cardHelpInfo = '';
  @Input() cardIcon: string;
  @Input() cardIconColor = '';
  @Input() cardInfoTitle = '';
  @Input() cardTitle = '';

  ngOnChanges(changes: SimpleChanges): void {
    this.cardCounter = changes?.cardCounter?.currentValue;
  }
}
