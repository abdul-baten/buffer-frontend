import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { I_CONNECTION, I_POST } from 'src/app/core/model';
import { Observable, of, Subscription } from 'rxjs';
import { PostModalFacade } from '../../facade/post-modal.facade';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer--connections',
  styleUrls: ['./connections.component.css'],
  templateUrl: './connections.component.html',
})
export class ConnectionsComponent implements OnInit, OnDestroy {
  @Output() connectionChange = new EventEmitter<Partial<I_CONNECTION>[]>();
  activeConnectionID$: Observable<string> = of('');
  connections$: Observable<I_CONNECTION[]>;
  private subscription$ = new Subscription();
  selectedConnections: Partial<I_CONNECTION>[] = [];

  constructor(private readonly postCreateModalFacade: PostModalFacade) {
    this.connections$ = this.postCreateModalFacade.getConnections();
  }

  ngOnInit(): void {
    this.activeConnectionID$ = this.postCreateModalFacade.getActiveConnectionID();

    this.subscription$.add(
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
    const findConnection = this.selectedConnections.find((entry: Partial<I_CONNECTION>) => (entry.id as string) === connection.id);
    const findConnectionIndex = this.selectedConnections.findIndex((entry: Partial<I_CONNECTION>) => (entry.id as string) === connection.id);
    if (!findConnection) {
      const { connectionType, id } = connection;
      this.selectedConnections.push({ connectionType, id });
    } else {
      this.selectedConnections.splice(findConnectionIndex, 1);
    }

    this.connectionChange.emit(this.selectedConnections);
  }

  isConnectionSelected(connection: I_CONNECTION): boolean {
    const findConnection = this.selectedConnections.find((entry: Partial<I_CONNECTION>) => (entry.id as string) === connection.id);
    return !!findConnection;
  }

  trackBy(_index: number, connection: I_CONNECTION): number {
    return +connection.connectionID;
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
