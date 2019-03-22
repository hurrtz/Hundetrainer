import React, { Component } from 'react';
import { Toast } from 'native-base';

import { retrieveData, storeData } from 'storage';
import PoopAdd from 'stories/screens/Poop/Add';
import { IPoop } from 'apptypes/poop';
import { TNavigation } from 'apptypes/base';

interface Props {
  navigation: TNavigation;
}

interface State {}

class PoopAddContainer extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.onSaveAddPoop = this.onSaveAddPoop.bind(this);
  }

  onSaveAddPoop(poop: IPoop) {
    retrieveData({
      key: 'poops',
      callback: (currentPoops: IPoop[]) => {
        const newPoop = { ...poop };
        const poops = [...(currentPoops || [])];

        storeData({
          key: 'poops',
          value: [...poops, newPoop],
          callback: () => {
            const { navigation } = this.props;

            Toast.show({
              type: 'success',
              text: 'Stuhlgang gespeichert!',
            });

            navigation.goBack();
          },
        });
      },
    });
  }

  render() {
    const { navigation } = this.props;

    return <PoopAdd navigation={navigation} onSave={this.onSaveAddPoop} />;
  }
}

export default PoopAddContainer;
