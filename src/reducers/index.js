import { combineReducers } from 'redux-immutable';
import cars from './cars';
import drivers from './drivers';
import entities from './entities';

export default combineReducers({
  cars,
  drivers,
  entities,
});
