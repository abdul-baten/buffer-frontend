import { Component, OnChanges, ChangeDetectionStrategy, SimpleChanges, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--analyze-card',
  styleUrls: ['./analyze-card.component.scss'],
  templateUrl: './analyze-card.component.html',
})
export class AnalyzeCardComponent implements OnChanges {
  @Input() cardCounter: number;
  @Input() cardIcon: string;
  @Input() cardIconColor: string;
  @Input() cardInfoTitle: string;
  @Input() cardTitle: string;

  ngOnChanges(changes: SimpleChanges) {
    this.cardCounter = changes.cardCounter.currentValue;
    this.cardIcon = changes.cardIcon.currentValue;
    this.cardIconColor = changes.cardIconColor.currentValue;
    this.cardInfoTitle = changes.cardInfoTitle.currentValue;
    this.cardTitle = changes.cardTitle.currentValue;
  }
}
