export type QUALITY = 'GOOD' | 'MEDIUM' | 'BAD';

export type COLOR = 'LIGHT' | 'MEDIUM' | 'DARK' | 'BLACK' | 'OTHER';

export type CONSISTENCY = 'LIQUID' | 'SOFT' | 'NORMAL' | 'HARD';

export interface Poop {
  id: string;
  date: string;
  quality: QUALITY;
  color: COLOR;
  consistency: CONSISTENCY;
  hasBlood: boolean;
  isConspicuous: boolean;
  additionalInformation: string;
}
