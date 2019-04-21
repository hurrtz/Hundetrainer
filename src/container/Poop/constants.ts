import { COLOR, CONSISTENCY, QUALITY } from 'apptypes/poop';

export const COLORS = [
  {
    title: 'hell',
    value: COLOR.LIGHT,
  },
  {
    title: 'normal',
    value: COLOR.MEDIUM,
  },
  {
    title: 'dunkel',
    value: COLOR.DARK,
  },
  {
    title: 'schwarz',
    value: COLOR.BLACK,
  },
  {
    title: 'andere Farbe',
    value: COLOR.OTHER,
  },
];

export const CONSISTENCIES = [
  {
    title: 'flüssig',
    value: CONSISTENCY.LIQUID,
  },
  {
    title: 'weich',
    value: CONSISTENCY.SOFT,
  },
  {
    title: 'normal',
    value: CONSISTENCY.NORMAL,
  },
  {
    title: 'hart',
    value: CONSISTENCY.HARD,
  },
];

export const QUALITIES = [
  {
    title: 'gut',
    value: QUALITY.GOOD,
  },
  {
    title: 'mäßig',
    value: QUALITY.MEDIUM,
  },
  {
    title: 'schlecht',
    value: QUALITY.BAD,
  },
];
