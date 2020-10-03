import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--analyze-card',
  styleUrls: ['./analyze-card.component.css'],
  templateUrl: './analyze-card.component.html',
})
export class AnalyzeCardComponent implements OnChanges {
  @Input() cardCounter: number = 0;
  @Input() cardHelpInfo: string = '';
  @Input() cardIcon: string = '';
  @Input() cardIconColor: string = '';
  @Input() cardInfoTitle: string = '';
  @Input() cardTitle: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    this.cardCounter = changes?.cardCounter?.currentValue;
  }
}
