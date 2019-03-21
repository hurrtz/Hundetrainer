export enum QUALITY {
  SOLID,
  SOFT,
  LIQUID,
}

export enum SMELL {
  LITTLE,
  NORMAL,
  STRONG,
}

export interface IPoop {
  date: string;
  quality: QUALITY;
  smell: SMELL;
  additionalInformation: string;
}
