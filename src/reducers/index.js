import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import cars from './carsReducer';
import drivers from './driversReducer';
import orders from './ordersReducer';
import entities from './entitiesReducer';
import errors from './errorsReducer';
import loading from './loadingReducer';

export * from './carsReducer';
export * from './driversReducer';
export * from './ordersReducer';
export * from './errorsReducer';
export * from './loadingReducer';

export default combineReducers({
  cars,
  drivers,
  orders,
  entities,
  errors,
  loading,
  form,
});
