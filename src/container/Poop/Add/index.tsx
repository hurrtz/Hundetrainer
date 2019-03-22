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
    retrieveData('poops', (currentPoops: IPoop[]) => {
      const newPoop = { ...poop };
      const poops = [...(currentPoops || [])];

      storeData({
        key: 'poops',
        value: [...poops, newPoop],
        callback: () => {
          const { navigation } = this.props;
          const backLocation = navigation.getParam('backLocation', undefined);

          Toast.show({
            type: 'success',
            text: 'Stuhlgang gespeichert!',
          });

          if (backLocation) {
            navigation.goBack(backLocation);
          }
        },
      });
    });
  }

  render() {
    return <PoopAdd onSave={this.onSaveAddPoop} />;
  }
}

export default PoopAddContainer;
