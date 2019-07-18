export { default as initializeApiClient } from './apiClient';
export { default as PropTypes } from './propTypes';
export { default as mq } from './mediaqueries';

export const toArray = (value = []) => (typeof value === 'string' ? [value] : value);
