import { Component, Host, Input, OnChanges, Optional, SimpleChanges } from '@angular/core';
import { I_POPOVER_DATA } from '@core/model';
import { SatPopover } from '@ncstate/sat-popover';

@Component({
  selector: 'buffer--popover',
  styleUrls: ['./popover.component.scss'],
  templateUrl: './popover.component.html',
})
export class PopoverComponent implements OnChanges {
  @Input() popoverInfo: I_POPOVER_DATA;

  constructor(@Optional() @Host() private popover: SatPopover) {}

  ngOnChanges(changes: SimpleChanges) {
    this.popoverInfo = changes.popoverInfo.currentValue;
  }

  closePopover(): void {
    this.popover.close();
  }
}
