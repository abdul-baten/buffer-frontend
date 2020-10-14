import { createAction, props } from '@ngrx/store';
import { IConnection } from '../core/model';

export const set_connection = createAction('[connection] Add Connection', props<{ connection: IConnection }>());
export const delete_connection = createAction('[connection] Delete Connection', props<{ connection: IConnection }>());
