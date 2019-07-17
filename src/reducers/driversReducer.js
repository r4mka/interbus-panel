import typeToReducer from 'type-to-reducer';
import { fromJS, List } from 'immutable';

export const FETCH_DRIVERS = 'FETCH_DRIVERS';
export const FETCH_DRIVER = 'FETCH_DRIVER';
export const UPDATE_DRIVER = 'UPDATE_DRIVER';
export const DELETE_DRIVER = 'DELETE_DRIVER';
export const CREATE_DRIVER = 'CREATE_DRIVER';

export default typeToReducer(
  {
    [`${DELETE_DRIVER}_FULFILLED`]: (state, { payload: { id } }) => state.delete(state.indexOf(id)),
    [`${CREATE_DRIVER}_FULFILLED`]: (state, { payload: { result } }) => state.unshift(result),
    [`${FETCH_DRIVERS}_FULFILLED`]: (state, { payload: { result } }) => List(fromJS(result.items)),
  },
  List(),
);
