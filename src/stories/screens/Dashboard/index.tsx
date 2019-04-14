import React, { Component } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import {
  View,
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
      <View>
        <NavigationBar
          leftComponent={
            <Icon onPress={() => navigation.toggleDrawer()} name="sidebar" />
          }
          title="Dashboard"
          styleName="inline"
        />
        <ScrollView>
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
        </ScrollView>
      </View>
    );
  }
}

export default Dashboard;
