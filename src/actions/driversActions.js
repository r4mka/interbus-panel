import { FETCH_DRIVERS, FETCH_DRIVER, UPDATE_DRIVER, DELETE_DRIVER, CREATE_DRIVER } from 'reducers';
import { apiClient } from 'store';
import { driverSchema, driversSchema } from './schemas';

export const fetchDrivers = () => ({
  type: FETCH_DRIVERS,
  payload: apiClient.get('/drivers'),
  meta: { schema: driversSchema },
});

export const fetchDriver = (id, options) => ({
  type: FETCH_DRIVER,
  payload: apiClient.get(`/drivers/${id}`, options),
  meta: { schema: driverSchema },
});

export const updateDriver = (id, payload, options) => ({
  type: UPDATE_DRIVER,
  payload: apiClient.post(`/drivers/${id}`, { payload, ...options }),
  meta: { schema: driverSchema },
});

export const deleteDriver = (id, options) => ({
  type: DELETE_DRIVER,
  payload: apiClient.delete(`/drivers/${id}`, options).then(() => ({ id })),
  meta: { entity: 'drivers' },
});

export const createDriver = (payload, options) => ({
  type: CREATE_DRIVER,
  payload: apiClient.post('/drivers', { payload, ...options }),
  meta: { schema: driverSchema },
});
