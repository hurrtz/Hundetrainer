import { NavigationScreenProp } from 'react-navigation';

import { State as PoopState } from 'container/Poop/reducer';

export type TNavigation = NavigationScreenProp<any, any>;

export interface INavigation {
  navigation: TNavigation;
}

export interface RootState {
  Poop: PoopState;
}
