import { createAction, props } from '@ngrx/store';
import { I_CONNECTION } from '@core/model';

const setConnection = createAction('[connection] Add Connection', props<{ connection: I_CONNECTION }>());
const deleteConnection = createAction('[connection] Delete Connection', props<{ connection: I_CONNECTION }>());

export { setConnection, deleteConnection };
