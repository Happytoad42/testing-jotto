import { actionTypes } from '../actions';
import successReducer from './successReducer';

describe('successReducer', () => {
  test('returns default initial state of "false" when no action is passed', () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
  });
  test('returns state of success: true if action of type "CORRECT_GUESS" is passed', () => {
    const newState = successReducer(undefined, {
      type: actionTypes.CORRECT_GUESS,
    });
    expect(newState).toBe(true);
  });
});
