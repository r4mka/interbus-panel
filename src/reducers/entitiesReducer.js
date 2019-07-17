import { fromJS } from 'immutable';

const initialState = fromJS({
  cars: {},
  drivers: {},
});

export default (state = initialState, { type, payload, meta }) => {
  if (payload && payload.entities) {
    return state.mergeDeep(fromJS(payload.entities));
  }

  const deleted = /DELETE_.*_FULFILLED/.exec(type);
  if (deleted && meta) {
    return state.deleteIn([meta.entity, payload.id]);
  }

  return state;
};
