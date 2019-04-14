import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import {
  Title,
  NavigationBar,
  ImageBackground,
  Tile,
  Subtitle,
  Overlay,
  Icon,
} from '@shoutem/ui';

// @ts-ignore
import { version } from '../../../../package.json';

import { TNavigation } from 'apptypes/base';
import BoGamePicture from 'assets/images/bo/game.png';

interface Props {
  navigation: TNavigation;
}

interface State {}

class Dashboard extends Component<Props, State> {
  render() {
    const { navigation } = this.props;
    const { height } = Dimensions.get('window');

    return (
      <ImageBackground
        style={{ width: undefined, height }}
        source={BoGamePicture}
      >
        <NavigationBar
          leftComponent={
            <Icon onPress={() => navigation.toggleDrawer()} name="sidebar" />
          }
          styleName="clear"
        />
        <Tile>
          <Overlay styleName="image-overlay">
            <Title styleName="sm-gutter-horizontal">Hundetrainer</Title>
            <Subtitle styleName="sm-gutter-horizontal">{version}</Subtitle>
          </Overlay>
        </Tile>
      </ImageBackground>
    );
  }
}

export default Dashboard;
