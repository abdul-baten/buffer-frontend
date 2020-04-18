import { Action, createReducer, on } from '@ngrx/store';
import { IMember } from '@core/model/member/member.interface';
import { setMemberInfo } from 'src/app/actions';

const memberFeatureKey = 'member';

const memberInitialState: IMember = {
  attribution: null,
  bussinesType: null,
  companyName: null,
  companySize: null,
  createdAt: null,
  plan: null,
};

const reducer = createReducer(
  memberInitialState,
  on(setMemberInfo, (state: IMember, action: { member: IMember }) => {
    const { member } = action;
    return {
      ...state,
      ...member,
    };
  }),
);

function memberReducer(state: IMember | undefined, action: Action) {
  return reducer(state, action);
}

export { memberFeatureKey, memberInitialState, memberReducer };
