export enum QUALITY {
  GOOD,
  MEDIUM,
  BAD,
}

export interface IPoop {
  date: string;
  quality: QUALITY;
  additionalInformation: string;
}
