import React, { Component } from 'react';

import { TNavigation } from 'apptypes/base';
import { HeaderButtons, Item } from 'ui/HeaderButtons';
import PoopEdit from 'stories/screens/Poop/Edit';

interface Props {
  navigation: TNavigation;
}

interface State {}

class PoopEditContainer extends Component<Props, State> {
  static navigationOptions = () => ({
    title: 'Bearbeiten',
    headerRight: (
      <HeaderButtons>
        <Item title="Speichern" onPress={() => alert('speichern')} />
      </HeaderButtons>
    ),
  });

  render() {
    const { navigation } = this.props;

    return <PoopEdit navigation={navigation} />;
  }
}

export default PoopEditContainer;
