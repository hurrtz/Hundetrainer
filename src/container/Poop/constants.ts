import { COLOR, CONSISTENCY, QUALITY } from 'container/Poop/types';

type COLORS = {
  title: string;
  value: COLOR;
}[];

export const COLORS: COLORS = [
  {
    title: 'hell',
    value: 'LIGHT',
  },
  {
    title: 'normal',
    value: 'MEDIUM',
  },
  {
    title: 'dunkel',
    value: 'DARK',
  },
  {
    title: 'schwarz',
    value: 'BLACK',
  },
  {
    title: 'andere Farbe',
    value: 'OTHER',
  },
];

type CONSISTENCIES = {
  title: string;
  value: CONSISTENCY;
}[];

export const CONSISTENCIES: CONSISTENCIES = [
  {
    title: 'flüssig',
    value: 'LIQUID',
  },
  {
    title: 'weich',
    value: 'SOFT',
  },
  {
    title: 'normal',
    value: 'NORMAL',
  },
  {
    title: 'hart',
    value: 'HARD',
  },
];

type QUALITIES = {
  title: string;
  value: QUALITY;
}[];

export const QUALITIES: QUALITIES = [
  {
    title: 'gut',
    value: 'GOOD',
  },
  {
    title: 'mäßig',
    value: 'MEDIUM',
  },
  {
    title: 'schlecht',
    value: 'BAD',
  },
];
