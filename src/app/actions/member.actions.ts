import { createAction, props } from '@ngrx/store';
import { IMember } from '@core/model/member/member.interface';

const setMemberInfo = createAction('[Member] Set Member Info', props<{ member: IMember }>());

export { setMemberInfo };
