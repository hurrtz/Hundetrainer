import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from 'stories/screens/Home';

import datas from './data';
import { fetchList } from './actions';

export interface Props {
  navigation: any;
  fetchList: Function;
  data: Object;
}

export interface State {
  homeReducer: {
    list: any;
    isLoading: boolean;
  };
}

class HomeContainer extends Component<Props, State> {
  componentDidMount() {
    const { fetchList: fetchListData } = this.props;

    fetchListData(datas);
  }

  render() {
    const { navigation, data } = this.props;

    return <Home navigation={navigation} list={data} />;
  }
}

function bindAction(dispatch: Function) {
  return {
    fetchList: (url: string) => dispatch(fetchList(url)),
  };
}

const mapStateToProps = (state: State) => {
  const {
    homeReducer: { list, isLoading },
  } = state;

  return {
    data: list,
    isLoading: isLoading,
  };
};

export default connect(
  mapStateToProps,
  bindAction,
)(HomeContainer);
