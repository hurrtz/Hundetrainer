import React, { Component } from 'react';
import { Container } from 'native-base';

import { retrieveData } from 'storage';
import PoopOverview from 'stories/screens/Poop/Overview';
import { IPoop } from 'apptypes/poop';
import { Drawer, Add } from 'ui/HeaderButtons';
import { TNavigation, INavigation } from 'apptypes/base';

interface Props {
  navigation: TNavigation;
}

interface State {
  poops: IPoop[];
  modalPoopAddVisible: boolean;
}

class PoopOverviewContainer extends Component<Props, State> {
  static navigationOptions = ({ navigation }: INavigation) => ({
    title: 'Stuhlgang',
    headerLeft: (
      <Drawer
        style={{ marginLeft: 10 }}
        onPress={() => navigation.openDrawer()}
      />
    ),
    headerRight: (
      <Add
        style={{ marginRight: 10 }}
        onPress={() => navigation.push('PoopAdd')}
      />
    ),
  });

  constructor(props: Props) {
    super(props);

    this.state = {
      poops: [],
      modalPoopAddVisible: false,
    };

    this.fetchPoops();
  }

  fetchPoops() {
    retrieveData({
      key: 'poops',
      callback: (poops: IPoop[]) => {
        if (poops && poops.length) {
          this.setState(prevState => ({
            ...prevState,
            poops,
          }));
        }
      },
    });
  }

  render() {
    const { navigation } = this.props;
    const { poops } = this.state;

    return (
      <Container>
        <PoopOverview navigation={navigation} poops={poops} />
      </Container>
    );
  }
}

export default PoopOverviewContainer;