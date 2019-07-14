import typeToReducer from 'type-to-reducer';
import { fromJS, List } from 'immutable';
import { isResource, startLoading, failLoading } from 'utils';

export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';

const initialState = fromJS(isResource({ items: [] }));

export default typeToReducer(
  {
    [FETCH_CARS]: {
      PENDING: startLoading,
      REJECTED: failLoading,
      FULFILLED: (
        state,
        {
          payload: {
            result: { items },
          },
        },
      ) => state.mergeDeep({ $isLoading: false, $didLoad: true, items: List(fromJS(items)) }),
    },
    [FETCH_CAR]: {
      PENDING: startLoading,
      REJECTED: failLoading,
      FULFILLED: (state, { payload: { result } }) =>
        state.mergeDeep({ $isLoading: false, $didLoad: true, items: List(fromJS(result)) }),
    },
  },
  initialState,
);
