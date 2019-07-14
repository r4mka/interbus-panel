import { FETCH_DRIVERS } from 'reducers/drivers';
import { apiClient } from 'store';
import { schema } from 'normalizr';

const driver = new schema.Entity('drivers', {}, { idAttribute: 'pk' });
const driversSchema = { items: [driver] };

export const fetchDrivers = () => ({
  type: FETCH_DRIVERS,
  payload: apiClient.get('/drivers'),
  meta: { schema: driversSchema },
});
