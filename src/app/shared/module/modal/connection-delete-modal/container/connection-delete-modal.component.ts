import { AppState } from 'src/app/reducers';
import { Component, Inject } from '@angular/core';
import { deleteConnection } from 'src/app/actions';
import { finalize } from 'rxjs/operators';
import { HttpService } from '@core/service/http/http.service';
import { I_CONNECTION } from '@core/model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

@Component({
  selector: 'buffer--connection-delete-modal',
  templateUrl: './connection-delete-modal.component.html',
  styleUrls: ['./connection-delete-modal.component.scss'],
})
export class ConnectionDeleteModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public connection: I_CONNECTION,
    private readonly dialogRef: MatDialogRef<ConnectionDeleteModalComponent>,
    private readonly httpService: HttpService,
    private readonly store: Store<AppState>,
  ) {}

  closeModal(): void {
    this.dialogRef.close();
  }

  onDeletePostModalClosed(): void {
    this.httpService
      .delete<I_CONNECTION>('connection/deleteConnection', this.connection._id)
      .pipe(finalize(() => this.closeModal()))
      .subscribe((connection: I_CONNECTION) => this.store.dispatch(deleteConnection({ connection })));
  }
}
