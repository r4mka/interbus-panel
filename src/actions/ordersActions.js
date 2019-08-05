import { FETCH_ORDERS, FETCH_ORDER, UPDATE_ORDER, DELETE_ORDER, CREATE_ORDER } from 'reducers';
import { apiClient } from 'store';
import { orderSchema, ordersSchema } from './schemas';

export const fetchOrders = () => ({
  type: FETCH_ORDERS,
  payload: apiClient.get('/orders'),
  meta: { schema: ordersSchema },
});

export const fetchOrder = (id, options) => ({
  type: FETCH_ORDER,
  payload: apiClient.get(`/orders/${id}`, options),
  meta: { schema: orderSchema },
});

export const updateOrder = (id, payload, options) => ({
  type: UPDATE_ORDER,
  payload: apiClient.post(`/orders/${id}`, { payload, ...options }),
  meta: { schema: orderSchema },
});

export const deleteOrder = (id, options) => ({
  type: DELETE_ORDER,
  payload: apiClient.delete(`/orders/${id}`, options).then(() => ({ id })),
  meta: { entity: 'orders' },
});

export const createOrder = (payload, options) => ({
  type: CREATE_ORDER,
  payload: apiClient.post('/orders', { payload, ...options }),
  meta: { schema: orderSchema },
});
