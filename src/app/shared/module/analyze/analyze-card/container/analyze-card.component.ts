import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--analyze-card',
  styleUrls: ['./analyze-card.component.scss'],
  templateUrl: './analyze-card.component.html',
})
export class AnalyzeCardComponent {
  @Input() cardCounter = 0;
  @Input() cardIcon = '';
  @Input() cardIconColor = '';
  @Input() cardInfoTitle = '';
  @Input() cardTitle = '';
  @Input() cardHelpInfo = '';
}
