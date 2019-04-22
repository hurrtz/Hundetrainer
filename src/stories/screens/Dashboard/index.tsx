import React, { PureComponent } from 'react';
import { Dimensions } from 'react-native';
import {
  Title,
  NavigationBar,
  ImageBackground,
  Tile,
  Subtitle,
  Overlay,
  Icon,
  Screen,
  View,
} from '@shoutem/ui';

// @ts-ignore
import { version } from '../../../../package.json';

import { TNavigation } from 'apptypes/base';
import BoGamePicture from 'assets/images/bo/game.png';

interface Props {
  navigation: TNavigation;
}

interface State {}

class Dashboard extends PureComponent<Props, State> {
  render() {
    const { navigation } = this.props;
    const { height } = Dimensions.get('window');

    return (
      <Screen>
        <NavigationBar
          leftComponent={
            <Icon onPress={() => navigation.toggleDrawer()} name="sidebar" />
          }
          title="Dashboard"
          styleName="inline"
        />
        <View>
          <ImageBackground
            style={{ width: undefined, height }}
            source={BoGamePicture}
          >
            <Tile>
              <Overlay styleName="image-overlay">
                <Title styleName="sm-gutter-horizontal">Hundetrainer</Title>
                <Subtitle styleName="sm-gutter-horizontal">{version}</Subtitle>
              </Overlay>
            </Tile>
          </ImageBackground>
        </View>
      </Screen>
    );
  }
}

export default Dashboard;
