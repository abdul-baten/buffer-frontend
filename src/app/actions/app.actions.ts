import { createAction, props } from '@ngrx/store';

export const load_app = createAction('[App] Load Apps');
export const looad_app_success = createAction('[App] Load Apps Success', props<{ data: any }>());
export const looad_app_failure = createAction('[App] Load Apps Failure', props<{ error: any }>());
