import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { I_CONNECTION } from '@core/model';
import { Observable } from 'rxjs';
import { PostCreateModalFacade } from '../../facade/post-create-modal.facade';

@Component({
  selector: 'buffer--post-create-modal-form-connection-selection',
  templateUrl: './post-create-modal-form-connection-selection.component.html',
  styleUrls: ['./post-create-modal-form-connection-selection.component.scss'],
})
export class PostCreateModalFormConnectionSelectionComponent implements OnInit {
  activeConnectionID$: Observable<string>;
  connections$: Observable<I_CONNECTION[]>;
  selectedConnections: string[] = [];
  @Output() connectionChange = new EventEmitter<string[]>();

  constructor(private readonly postCreateModalFacade: PostCreateModalFacade) {
    this.connections$ = this.postCreateModalFacade.getConnections();
  }

  ngOnInit(): void {
    this.activeConnectionID$ = this.postCreateModalFacade.getActiveConnectionID();
  }

  generateTooltip(connection: I_CONNECTION): string {
    const connectionType = connection.connectionType
      .split('_')
      .join(' ')
      .trim();

    return `${connection.connectionName} | ${connectionType}`;
  }

  connectionSelected(connectionID: string) {
    const findConnection = this.selectedConnections.find((entry: string) => entry === connectionID);
    const findConnectionIndex = this.selectedConnections.findIndex((entry: string) => entry === connectionID);
    if (!findConnection) {
      this.selectedConnections.push(connectionID);
    } else {
      this.selectedConnections.splice(findConnectionIndex, 1);
    }

    this.connectionChange.emit(this.selectedConnections);
  }

  isConnectionSelected(connectionID: string): boolean {
    const findConnection = this.selectedConnections.find((entry: string) => entry === connectionID);
    return !!findConnection;
  }
}
