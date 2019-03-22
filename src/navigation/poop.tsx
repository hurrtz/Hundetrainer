import { createStackNavigator } from 'react-navigation';

import Training from 'container/Activities/Training';
import Places from 'container/Activities/Places';
import Toys from 'container/Activities/Toys';

const PoopNavigator = createStackNavigator(
  {
    PoopOverview: { screen: Training },
    PoopAdd: { screen: Places },
    PoopEdit: { screen: Toys },
  },
  {
    initialRouteName: 'PoopOverview',
  },
);

export default PoopNavigator;
