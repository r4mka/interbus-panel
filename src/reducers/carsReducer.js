import typeToReducer from 'type-to-reducer';
import { fromJS, List } from 'immutable';

export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';
export const UPDATE_CAR = 'UPDATE_CAR';
export const DELETE_CAR = 'DELETE_CAR';
export const CREATE_CAR = 'CREATE_CAR';

export default typeToReducer(
  {
    [`${DELETE_CAR}_FULFILLED`]: (state, { payload: { id } }) => state.delete(state.indexOf(id)),
    [`${CREATE_CAR}_FULFILLED`]: (state, { payload: { result } }) => state.unshift(result),
    [`${FETCH_CARS}_FULFILLED`]: (state, { payload: { result } }) => List(fromJS(result.items)),
  },
  List(),
);
