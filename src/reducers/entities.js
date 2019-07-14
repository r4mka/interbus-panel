import { fromJS } from 'immutable';

const initialState = fromJS({
  cars: {},
});

export default (state = initialState, action) => {
  if (action.payload && action.payload.entities) {
    return state.mergeDeep(fromJS(action.payload.entities));
  }

  return state;
};
