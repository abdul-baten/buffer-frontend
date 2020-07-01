import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  selectedConnections: Partial<I_CONNECTION>[] = [];
  @Output() connectionChange = new EventEmitter<Partial<I_CONNECTION>[]>();

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

  connectionSelected(connection: I_CONNECTION) {
    const findConnection = this.selectedConnections.find((entry: I_CONNECTION) => entry.connectionID === connection.connectionID);
    const findConnectionIndex = this.selectedConnections.findIndex((entry: I_CONNECTION) => entry.connectionID === connection.connectionID);
    if (!findConnection) {
      const { connectionID, connectionToken, connectionType } = connection;
      this.selectedConnections.push({ connectionID, connectionToken, connectionType });
    } else {
      this.selectedConnections.splice(findConnectionIndex, 1);
    }

    this.connectionChange.emit(this.selectedConnections);
  }

  isConnectionSelected(connection: I_CONNECTION): boolean {
    const findConnection = this.selectedConnections.find((entry: I_CONNECTION) => entry.connectionID === connection.connectionID);
    return !!findConnection;
  }
}
