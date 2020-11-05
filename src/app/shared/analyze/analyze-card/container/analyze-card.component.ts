import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer-analyze-card',
  styleUrls: ['./analyze-card.component.css'],
  templateUrl: './analyze-card.component.html'
})
export class AnalyzeCardComponent implements OnChanges {
  @Input() counter = 0;
  @Input() help_info!: string;
  @Input() connection_type!: string;
  @Input() info_title!: string;
  @Input() title!: string;

  ngOnChanges (changes: SimpleChanges): void {
    this.counter = changes.counter.currentValue;
  }
}
