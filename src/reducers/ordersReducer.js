import typeToReducer from 'type-to-reducer';
import { fromJS, List } from 'immutable';

export const FETCH_ORDERS = 'FETCH_ORDERS';
export const FETCH_ORDER = 'FETCH_ORDER';
export const UPDATE_ORDER = 'UPDATE_ORDER';
export const DELETE_ORDER = 'DELETE_ORDER';
export const CREATE_ORDER = 'CREATE_ORDER';

export default typeToReducer(
  {
    [`${DELETE_ORDER}_FULFILLED`]: (state, { payload: { id } }) => state.delete(state.indexOf(id)),
    [`${CREATE_ORDER}_FULFILLED`]: (state, { payload: { result } }) => state.unshift(result),
    [`${FETCH_ORDERS}_FULFILLED`]: (state, { payload: { result } }) => List(fromJS(result.items)),
  },
  List(),
);
