import { schema } from 'normalizr';

const { Entity } = schema;
const car = new Entity('cars', {}, { idAttribute: 'pk' });
const driver = new Entity('drivers', {}, { idAttribute: 'pk' });

export const carsSchema = { items: [car] };
export const driversSchema = { items: [driver] };

export const carSchema = new Entity('cars', { driver }, { idAttribute: 'pk' });
export const driverSchema = new Entity('drivers', { car }, { idAttribute: 'pk' });
