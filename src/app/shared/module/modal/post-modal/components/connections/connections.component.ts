import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { I_CONNECTION, I_POST } from '@core/model';
import { Observable } from 'rxjs';
import { PostModalFacade } from '../../facade/post-modal.facade';
import { SubSink } from 'subsink';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--connections',
  styleUrls: ['./connections.component.scss'],
  templateUrl: './connections.component.html',
})
export class ConnectionsComponent implements OnInit, OnDestroy {
  @Output() connectionChange = new EventEmitter<Partial<I_CONNECTION>[]>();
  activeConnectionID$: Observable<string>;
  connections$: Observable<I_CONNECTION[]>;
  private subscriptions$ = new SubSink();
  selectedConnections: Partial<I_CONNECTION>[] = [];

  constructor(private readonly postCreateModalFacade: PostModalFacade) {
    this.connections$ = this.postCreateModalFacade.getConnections();
  }

  ngOnInit(): void {
    this.activeConnectionID$ = this.postCreateModalFacade.getActiveConnectionID();

    this.subscriptions$.add(
      this.postCreateModalFacade.getPostInfo().subscribe((postInfo: I_POST) => {
        const postConnection = postInfo.postConnection;
        if (!!postConnection.connectionID) {
          this.selectedConnections.push(postConnection);
          this.connectionChange.emit(this.selectedConnections);
        }
      }),
    );
  }

  generateTooltip(connection: I_CONNECTION): string {
    const connectionType = connection.connectionType.split('_').join(' ').trim();

    return `${connection.connectionName} | ${connectionType}`;
  }

  connectionSelected(connection: I_CONNECTION) {
    const findConnection = this.selectedConnections.find((entry: I_CONNECTION) => entry.id === connection.id);
    const findConnectionIndex = this.selectedConnections.findIndex((entry: I_CONNECTION) => entry.id === connection.id);
    if (!findConnection) {
      const { connectionType, id } = connection;
      this.selectedConnections.push({ connectionType, id });
    } else {
      this.selectedConnections.splice(findConnectionIndex, 1);
    }

    this.connectionChange.emit(this.selectedConnections);
  }

  isConnectionSelected(connection: I_CONNECTION): boolean {
    const findConnection = this.selectedConnections.find((entry: I_CONNECTION) => entry.id === connection.id);
    return !!findConnection;
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
