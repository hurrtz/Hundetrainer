import React, { PureComponent } from 'react';
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';

import Health from 'stories/screens/Health';

interface Props {
  navigation: Navigation;
}

interface State {}

class HealthContainer extends PureComponent<Props, State> {
  static navigationOptions = {
    drawerIcon: () => <IconComponent name="medical-bag" size={25} />,
  };

  render() {
    const { navigation } = this.props;

    return <Health navigation={navigation} />;
  }
}

export default HealthContainer;
