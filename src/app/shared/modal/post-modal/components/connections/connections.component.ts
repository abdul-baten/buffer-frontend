import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IConnection } from 'src/app/core/model';
import { PostModalFacade } from '../../facade/post-modal.facade';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'buffer-connections',
  styleUrls: ['./connections.component.css'],
  templateUrl: './connections.component.html'
})
export class ConnectionsComponent implements OnInit, OnDestroy {
  @Output() connection_changed = new EventEmitter<Partial<IConnection>[]>();
  connections$: Observable<IConnection[]>;
  private subscription$ = new Subscription();
  selected_connections: Partial<IConnection>[] = [];

  constructor (private readonly postCreateModalFacade: PostModalFacade) {
    this.connections$ = this.postCreateModalFacade.getConnections();
  }

  ngOnInit (): void {

    /*
     * This.subscription$.add(this.postCreateModalFacade.getPostInfo().subscribe((postInfo: IPost) => {
     *   const { postConnection } = postInfo;
     */

    /*
     *   If (postConnection.connection_id) {
     *     this.selected_connections.push(postConnection);
     *     this.connection_changed.emit(this.selected_connections);
     *   }
     * }));
     */
  }

  generateTooltip (connection: IConnection): string {
    const connection_type = connection.connection_type.split('_').join(' ').
      trim();

    return `${connection.connection_name} | ${connection_type}`;
  }

  connectionSelected (selected_connection: IConnection): void {
    const found_connection = this.selected_connections.find((entry: Partial<IConnection>) => entry.id as string === selected_connection.id);
    const found_connection_index = this.selected_connections.findIndex((entry: Partial<IConnection>) => entry.id as string === selected_connection.id);

    if (found_connection) {
      this.selected_connections.splice(found_connection_index, 1);
    } else {
      const { connection_type, id } = selected_connection;

      this.selected_connections.push({
        connection_type,
        id });
    }

    this.connection_changed.emit(this.selected_connections);
  }

  isConnectionSelected (selected_connection: IConnection): boolean {
    const found_connection = this.selected_connections.find((entry: Partial<IConnection>) => entry.id as string === selected_connection.id);

    return Boolean(found_connection);
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  trackBy (_index: number, connection: IConnection): number {
    return Number(connection.connection_id);
  }

  @HostListener('window:beforeunload')
  ngOnDestroy (): void {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }
}
