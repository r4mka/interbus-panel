import typeToReducer from 'type-to-reducer';
import { fromJS, List } from 'immutable';

export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';

export default typeToReducer(
  {
    [FETCH_CARS]: {
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
