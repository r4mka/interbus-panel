import { FETCH_CARS } from 'reducers/cars';
import { apiClient } from 'store';
import { schema } from 'normalizr';

const car = new schema.Entity('cars', {}, { idAttribute: 'pk' });
const carsSchema = { items: [car] };

export const fetchCars = options => ({
  type: FETCH_CARS,
  payload: apiClient.get('/cars', options),
  meta: { schema: carsSchema },
});
