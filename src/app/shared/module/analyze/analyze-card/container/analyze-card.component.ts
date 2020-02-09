import { Component, OnChanges, ChangeDetectionStrategy, SimpleChanges, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--analyze-card',
  templateUrl: './analyze-card.component.html',
  styleUrls: ['./analyze-card.component.scss'],
})
export class AnalyzeCardComponent implements OnChanges {
  @Input() cardCounter: number;
  @Input() cardIcon: string;
  @Input() cardIconBGColor: string;
  @Input() cardIconColor: string;
  @Input() cardInfoTitle: string;
  @Input() cardTitle: string;
  @Input() cardTooltipText: string;

  ngOnChanges(changes: SimpleChanges) {
    this.cardCounter = changes.cardCounter.currentValue;
    this.cardIcon = changes.cardIcon.currentValue;
    this.cardIconBGColor = changes.cardIconBGColor.currentValue;
    this.cardIconColor = changes.cardIconColor.currentValue;
    this.cardInfoTitle = changes.cardInfoTitle.currentValue;
    this.cardTitle = changes.cardTitle.currentValue;
    this.cardTooltipText = changes.cardTooltipText.currentValue;
  }
}
