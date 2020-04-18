import { memberReducer, memberInitialState } from './member.reducer';

describe('Member Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = memberReducer(memberInitialState, action);

      expect(result).toBe(memberInitialState);
    });
  });
});
