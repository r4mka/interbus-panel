import { FETCH_DRIVERS, FETCH_DRIVER } from 'reducers';
import { apiClient } from 'store';
import { schema } from 'normalizr';

const driver = new schema.Entity('drivers', {}, { idAttribute: 'pk' });
const driversSchema = { items: [driver] };

export const fetchDrivers = () => ({
  type: FETCH_DRIVERS,
  payload: apiClient.get('/drivers'),
  meta: { schema: driversSchema },
});

const car = new schema.Entity('cars', {}, { idAttribute: 'pk' });
const driverSchema = new schema.Entity('drivers', { car }, { idAttribute: 'pk' });

export const fetchDriver = (id, options) => ({
  type: FETCH_DRIVER,
  payload: apiClient.get(`/drivers/${id}`, options),
  meta: { schema: driverSchema },
});
