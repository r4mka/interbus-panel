import { FETCH_CARS, FETCH_CAR, UPDATE_CAR, DELETE_CAR, CREATE_CAR } from 'reducers';
import { apiClient } from 'store';
import { carSchema, carsSchema } from './schemas';

export const fetchCars = options => ({
  type: FETCH_CARS,
  payload: apiClient.get('/cars', options),
  meta: { schema: carsSchema },
});

export const fetchCar = (id, options) => ({
  type: FETCH_CAR,
  payload: apiClient.get(`/cars/${id}`, options),
  meta: { schema: carSchema },
});

export const updateCar = (id, payload, options) => ({
  type: UPDATE_CAR,
  payload: apiClient.post(`/cars/${id}`, { payload, ...options }),
  meta: { schema: carSchema },
});

export const deleteCar = (id, options) => ({
  type: DELETE_CAR,
  payload: apiClient.delete(`/cars/${id}`, options).then(() => ({ id })),
  meta: { entity: 'cars' },
});

export const createCar = (payload, options) => ({
  type: CREATE_CAR,
  payload: apiClient.post('/cars', { payload, ...options }),
  meta: { schema: carSchema },
});
