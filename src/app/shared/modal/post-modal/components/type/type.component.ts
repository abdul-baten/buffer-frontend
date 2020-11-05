import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'buffer-type',
  styleUrls: ['./type.component.css'],
  templateUrl: './type.component.html'
})
export class TypeComponent {
  @Output() tab_selected = new EventEmitter<number>();

  selectTab (index: number): void {
    this.tab_selected.emit(index);
  }
}
