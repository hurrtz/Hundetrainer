import React, { Component, Fragment } from 'react';

import { retrieveData } from 'storage';
import Poops from 'stories/screens/Poops';
import { IPoop } from 'apptypes/poop';
import QuickAdd from 'stories/fabs/QuickAdd';

export interface Props {
  navigation: any;
}

export interface State {
  poops: IPoop[];
}

class PoopsContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      poops: [],
    };

    this.fetchPoops();
  }

  fetchPoops() {
    retrieveData('poops', (poops: IPoop[]) => {
      if (poops && poops.length) {
        this.setState(prevState => ({
          ...prevState,
          poops,
        }));
      }
    });
  }

  render() {
    const { navigation } = this.props;
    const { poops } = this.state;

    return (
      <Fragment>
        <Poops navigation={navigation} poops={poops} />
        <QuickAdd />
      </Fragment>
    );
  }
}

export default PoopsContainer;
