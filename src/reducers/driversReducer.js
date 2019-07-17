import typeToReducer from 'type-to-reducer';
import { fromJS, List } from 'immutable';

export const FETCH_DRIVERS = 'FETCH_DRIVERS';
export const FETCH_DRIVER = 'FETCH_DRIVER';
export const UPDATE_DRIVER = 'UPDATE_DRIVER';
export const DELETE_DRIVER = 'DELETE_DRIVER';

export default typeToReducer(
  {
    [FETCH_DRIVERS]: {
      FULFILLED: (
        state,
        {
          payload: {
            result: { items },
          },
        },
      ) => List(fromJS(items)),
    },
    [DELETE_DRIVER]: {
      FULFILLED: (state, { payload: { id } }) => state.delete(state.indexOf(id)),
    },
  },
  List(),
);
