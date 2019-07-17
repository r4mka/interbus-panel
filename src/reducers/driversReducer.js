import typeToReducer from 'type-to-reducer';
import { fromJS, List } from 'immutable';

export const FETCH_DRIVERS = 'FETCH_DRIVERS';
export const FETCH_DRIVER = 'FETCH_DRIVER';
export const UPDATE_DRIVER = 'UPDATE_DRIVER';

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
  },
  List(),
);
