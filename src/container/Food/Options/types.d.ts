export type TYPE = 'DRY_FOOD' | 'WET_FOOD' | 'BARF' | 'OTHER';

export type VENDOR = 'FROM_ADDRESS_BOOK' | 'SELF_MADE';

export interface FoodOption {
  id: string;
  name: string;
  picture: string;
  date: Date;
  type: TYPE;
  vendor: VENDOR;
  vendorId: string;
}
