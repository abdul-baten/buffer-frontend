import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import type { IConnectionSelected } from 'src/app/core/model';
import type { Location } from '@angular/common';
import type { Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer-toolbar',
  styleUrls: ['./toolbar.component.css'],
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent implements OnChanges {
  @Input() back_button = true;
  @Input() header_title = '';
  @Input() show_connections = true;
  @Output() connection_selected = new EventEmitter<IConnectionSelected>();

  constructor (private readonly location: Location, private readonly router: Router) {}

  ngOnChanges (changes: SimpleChanges): void {
    this.back_button = changes.back_button.currentValue;
    this.header_title = changes.header_title.currentValue;
    this.show_connections = changes.show_connections.currentValue;
  }

  backClicked (): void {
    this.location.back();
  }

  isConnectionSelected (event: IConnectionSelected): void {
    this.connection_selected.emit(event);
  }

  navigate (): void {
    this.router.navigate(['connection/profiles']);
  }
}
