import { FETCH_CARS, FETCH_CAR } from 'reducers';
import { apiClient } from 'store';
import { schema } from 'normalizr';

const car = new schema.Entity('cars', {}, { idAttribute: 'pk' });
const carsSchema = { items: [car] };

export const fetchCars = options => ({
  type: FETCH_CARS,
  payload: apiClient.get('/cars', options),
  meta: { schema: carsSchema },
});

const driver = new schema.Entity('drivers', {}, { idAttribute: 'pk' });
const carSchema = new schema.Entity('cars', { driver }, { idAttribute: 'pk' });

export const fetchCar = (id, options) => ({
  type: FETCH_CAR,
  payload: apiClient.get(`/cars/${id}`, options),
  meta: { schema: carSchema },
});
