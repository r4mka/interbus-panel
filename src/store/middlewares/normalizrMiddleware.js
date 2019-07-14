import { normalize } from 'normalizr';

export default () => next => action => {
  const schema = action.meta && action.meta.schema;

  if (schema && action.payload && !action.error) {
    return next({
      ...action,
      payload: normalize(action.payload, schema),
    });
  }

  return next(action);
};
