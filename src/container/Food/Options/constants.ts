import {
  TYPE as VALUE_TYPE,
  VENDOR as VENDOR_TYPES,
} from 'container/Food/Options/types';

export type TYPE = {
  title: string;
  value: VALUE_TYPE;
};

export const TYPES: TYPE[] = [
  {
    title: 'Trockenfutter',
    value: 'DRY_FOOD',
  },
  {
    title: 'Nassfutter',
    value: 'WET_FOOD',
  },
  {
    title: 'BARF',
    value: 'BARF',
  },
  {
    title: 'sonstiges',
    value: 'OTHER',
  },
];

export type VENDOR = {
  title: string;
  value: VENDOR_TYPES;
};

export const VENDORS: VENDOR[] = [
  {
    title: 'aus dem Adressbuch',
    value: 'FROM_ADDRESS_BOOK',
  },
  {
    title: 'selbst gemacht',
    value: 'SELF_MADE',
  },
];
