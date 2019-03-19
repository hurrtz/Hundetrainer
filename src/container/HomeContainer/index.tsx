import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from 'stories/screens/Home';

export interface Props {
  navigation: any;
}

export interface State {
  homeReducer: {
    isLoading: boolean;
  };
}

class HomeContainer extends Component<Props, State> {
  render() {
    const { navigation } = this.props;

    return <Home navigation={navigation} />;
  }
}

const mapStateToProps = (state: State) => {
  const {
    homeReducer: { isLoading },
  } = state;

  return {
    isLoading: isLoading,
  };
};

export default connect(mapStateToProps)(HomeContainer);
