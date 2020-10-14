import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { IFbOverviewInsight } from 'src/app/core/model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer-overview',
  styleUrls: ['./overview.component.css'],
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnChanges {
  @Input()
  overview!: IFbOverviewInsight;

  ngOnChanges (changes: SimpleChanges): void {
    this.overview = changes?.overview?.currentValue;
  }
}
