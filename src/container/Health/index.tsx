import React, { PureComponent, ReactElement } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import Health from 'stories/screens/Health';

interface Props {
  navigation: Navigation;
}

class HealthContainer extends PureComponent<Props> {
  static navigationOptions = {
    drawerIcon: (): ReactElement => (
      <IconComponent name="medical-bag" size={25} />
    ),
  };

  render(): ReactElement {
    const { navigation } = this.props;

    return <Health navigation={navigation} />;
  }
}

export default HealthContainer;
