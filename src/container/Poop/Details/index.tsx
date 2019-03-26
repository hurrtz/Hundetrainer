import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TNavigation, INavigation } from 'apptypes/base';
import { HeaderButtons, Item } from 'ui/HeaderButtons';
import PoopDetails from 'stories/screens/Poop/Details';
import { removePoop } from '../actions';

interface Props {
  navigation: TNavigation;
}

interface State {}

class PoopDetailsContainer extends Component<Props, State> {
  static navigationOptions = ({ navigation }: INavigation) => ({
    title: '',
    headerRight: (
      <HeaderButtons>
        <Item
          title="bearbeiten"
          onPress={() =>
            navigation.navigate('PoopEdit', {
              poop: navigation.getParam('poop'),
            })
          }
        />
      </HeaderButtons>
    ),
  });

  render() {
    const { navigation } = this.props;

    return <PoopDetails navigation={navigation} />;
  }
}

const mapDispatchToProps = { removePoop };

export default connect(
  undefined,
  mapDispatchToProps,
)(PoopDetailsContainer);
