import typeToReducer from 'type-to-reducer';
import { fromJS, List } from 'immutable';
import { isResource, startLoading, failLoading } from 'utils';

export const FETCH_DRIVERS = 'FETCH_DRIVERS';
export const FETCH_DRIVER = 'FETCH_DRIVER';

const initialState = fromJS(isResource({ items: [] }));

export default typeToReducer(
  {
    [FETCH_DRIVERS]: {
      PENDING: startLoading,
      REJECTED: failLoading,
      FULFILLED: (
        state,
        {
          payload: {
            result: { items },
          },
        },
      ) => state.merge({ $isLoading: false, $didLoad: true, items: List(fromJS(items)) }),
    },
    [FETCH_DRIVER]: {
      PENDING: startLoading,
      REJECTED: failLoading,
      FULFILLED: (state, { payload: { result } }) =>
        state.mergeDeep({ $isLoading: false, $didLoad: true, items: List(fromJS(result)) }),
    },
  },
  initialState,
);
