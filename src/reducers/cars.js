import typeToReducer from 'type-to-reducer';
import { fromJS, List } from 'immutable';
import { isResource, resourceReducer } from 'utils';

export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';

const initialState = fromJS(isResource({ items: [] }));

export default typeToReducer(
  {
    [FETCH_CARS]: {
      ...resourceReducer,
      FULFILLED: (
        state,
        {
          payload: {
            result: { items },
          },
        },
      ) => state.merge({ $isLoading: false, $didLoad: true, items: List(fromJS(items)) }),
    },
    [FETCH_CAR]: resourceReducer,
  },
  initialState,
);
