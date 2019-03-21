import React, { Component } from 'react';

import { retrieveData } from 'storage';
import Training from 'stories/screens/Training';
import { IPoop } from 'apptypes/poop';

export interface Props {
  navigation: any;
}

export interface State {
  poops: IPoop[];
}

class TrainingContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      poops: [],
    };

    this.fetchPoops();

    this.onAddPoop = this.onAddPoop.bind(this);
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

  onAddPoop(newPoop: IPoop) {
    this.setState((prevState: State) => ({
      ...prevState,
      poops: [...prevState.poops, newPoop],
    }));
  }

  render() {
    const { navigation } = this.props;
    const { poops } = this.state;

    return (
      <Training
        navigation={navigation}
        poops={poops}
        onAddPoop={this.onAddPoop}
      />
    );
  }
}

export default TrainingContainer;
