import { combineReducers } from 'redux-immutable';
import cars from './carsReducer';
import drivers from './driversReducer';
import entities from './entitiesReducer';
import errors from './errorsReducer';
import loading from './loadingReducer';

export * from './carsReducer';
export * from './driversReducer';
export * from './errorsReducer';
export * from './loadingReducer';

export default combineReducers({
  cars,
  drivers,
  entities,
  errors,
  loading,
});
