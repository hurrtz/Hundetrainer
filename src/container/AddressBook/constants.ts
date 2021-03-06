import { ADDRESS_TYPES as TYPES } from 'container/AddressBook/types';

export interface AddressType {
  title: string;
  value: TYPES;
}

export const ADDRESS_TYPES: AddressType[] = [
  {
    title: 'Ernährung',
    value: 'DIET',
  },
  {
    title: 'Gesundheit',
    value: 'HEALTH',
  },
  {
    title: 'Training',
    value: 'TRAINING',
  },
  {
    title: 'Auslauf',
    value: 'EXCERCISE',
  },
  {
    title: 'Hundeauslaufgebiet',
    value: 'DOG_PARK',
  },
  {
    title: 'Hundebetreuung',
    value: 'DOG_SITTING',
  },
  {
    title: 'Hunde-Pension',
    value: 'DOG_PENSION',
  },
  {
    title: 'sonstige',
    value: 'OTHER',
  },
];
