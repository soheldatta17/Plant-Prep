import { DeliveryZone } from '../types';

export const deliveryZones: DeliveryZone[] = [
  {
    id: '1',
    name: 'Downtown & Central',
    deliveryFee: 0,
    estimatedDays: 1
  },
  {
    id: '2',
    name: 'Suburbs (5-15mi)',
    deliveryFee: 8,
    estimatedDays: 2
  },
  {
    id: '3',
    name: 'Extended Area (15-25mi)',
    deliveryFee: 15,
    estimatedDays: 3
  },
  {
    id: '4',
    name: 'Rural Area (25mi+)',
    deliveryFee: 25,
    estimatedDays: 4
  }
];