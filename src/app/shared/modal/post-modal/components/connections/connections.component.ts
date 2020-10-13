import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { IConnection, IPost } from 'src/app/core/model';
import { Observable, of, Subscription } from 'rxjs';
import { PostModalFacade } from '../../facade/post-modal.facade';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer-connections',
  styleUrls: ['./connections.component.css'],
  templateUrl: './connections.component.html',
})
export class ConnectionsComponent implements OnInit, OnDestroy {
  @Output() connectionChange = new EventEmitter<Partial<IConnection>[]>();
  activeConnectionID$: Observable<string> = of('');
  connections$: Observable<IConnection[]>;
  private subscription$ = new Subscription();
  selectedConnections: Partial<IConnection>[] = [];

  constructor(private readonly postCreateModalFacade: PostModalFacade) {
    this.connections$ = this.postCreateModalFacade.getConnections();
  }

  ngOnInit(): void {
    this.activeConnectionID$ = this.postCreateModalFacade.getActiveConnectionID();

    this.subscription$.add(
      this.postCreateModalFacade.getPostInfo().subscribe((postInfo: IPost) => {
        const postConnection = postInfo.postConnection;
        if (!!postConnection.connection_id) {
          this.selectedConnections.push(postConnection);
          this.connectionChange.emit(this.selectedConnections);
        }
      }),
    );
  }

  generateTooltip(connection: IConnection): string {
    const connection_type = connection.connection_type.split('_').join(' ').trim();

    return `${connection.connection_name} | ${connection_type}`;
  }

  connectionSelected(connection: IConnection) {
    const findConnection = this.selectedConnections.find((entry: Partial<IConnection>) => (entry.id as string) === connection.id);
    const findConnectionIndex = this.selectedConnections.findIndex((entry: Partial<IConnection>) => (entry.id as string) === connection.id);
    if (!findConnection) {
      const { connection_type, id } = connection;
      this.selectedConnections.push({ connection_type, id });
    } else {
      this.selectedConnections.splice(findConnectionIndex, 1);
    }

    this.connectionChange.emit(this.selectedConnections);
  }

  isConnectionSelected(connection: IConnection): boolean {
    const findConnection = this.selectedConnections.find((entry: Partial<IConnection>) => (entry.id as string) === connection.id);
    return !!findConnection;
  }

  trackBy(_index: number, connection: IConnection): number {
    return +connection.connection_id;
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
