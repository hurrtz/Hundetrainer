export enum QUALITY {
  GOOD,
  MEDIUM,
  BAD,
}

export enum COLOR {
  LIGHT,
  MEDIUM,
  DARK,
  BLACK,
  OTHER,
}

export enum CONSISTENCY {
  LIQUID,
  SOFT,
  NORMAL,
  HARD,
}

export interface IPoop {
  id: string;
  date: string;
  quality: QUALITY;
  color: COLOR;
  consistency: CONSISTENCY;
  hasBlood: boolean;
  isConspicuous: boolean;
  additionalInformation: string;
}
