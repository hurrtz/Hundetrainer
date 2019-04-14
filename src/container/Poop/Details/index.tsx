import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TNavigation } from 'apptypes/base';
import PoopDetails from 'stories/screens/Poop/Details';
import { removePoop } from '../actions';

interface Props {
  navigation: TNavigation;
}

interface State {}

class PoopDetailsContainer extends Component<Props, State> {
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
