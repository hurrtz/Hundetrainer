import React, { PureComponent } from 'react';
import {
  View,
  Heading,
  Title,
  Subtitle,
  Text,
  NavigationBar,
  Icon,
} from '@shoutem/ui';

import { IPoop } from 'container/Poop/types';
import { StandardView } from 'ui/Layout';

interface Props {
  navigation: Navigation;
  poop: IPoop;
  onDetailsPoop: Function;
  onEditPoop: Function;
}

interface State {}

class PoopDetails extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.onGoingBack = this.onGoingBack.bind(this);
  }

  componentWillUnmount() {
    const { onDetailsPoop } = this.props;

    onDetailsPoop({ id: undefined });
  }

  formatDate(date: Date) {
    const enforceTwoDigits = (value: number): string =>
      value < 10 ? `0${value}` : String(value);

    return `${enforceTwoDigits(date.getDate())}.${enforceTwoDigits(
      date.getMonth() + 1,
    )}.${date.getFullYear()}`;
  }

  formatTime(date: Date) {
    const enforceTwoDigits = (value: number): string =>
      value < 10 ? `0${value}` : String(value);

    return `${enforceTwoDigits(date.getHours())}:${enforceTwoDigits(
      date.getMinutes(),
    )} Uhr`;
  }

  createQuality() {
    const { poop } = this.props;

    switch (poop.quality) {
      case 'BAD':
        return <Text>schlecht</Text>;

      case 'MEDIUM':
        return <Text>mäßig</Text>;

      default:
        return <Text>normal</Text>;
    }
  }

  createConsistency() {
    const { poop } = this.props;

    switch (poop.consistency) {
      case 'LIQUID':
        return <Text>flüssig</Text>;

      case 'SOFT':
        return <Text>weich</Text>;

      case 'HARD':
        return <Text>hart</Text>;

      default:
        return <Text>normal</Text>;
    }
  }

  createColor() {
    const { poop } = this.props;

    switch (poop.color) {
      case 'LIGHT':
        return <Text>hell</Text>;

      case 'OTHER':
        return <Text>sonstige Farbe</Text>;

      case 'DARK':
        return <Text>dunkel</Text>;

      case 'BLACK':
        return <Text>schwarz</Text>;

      default:
        return <Text>normal</Text>;
    }
  }

  createSecondaryInformations() {
    const { poop } = this.props;
    const out = [];

    if (poop.isConspicuous) {
      out.push(
        <Subtitle key="isConspicuous" style={{ marginTop: 25 }}>
          Auffälliger Stuhl!
        </Subtitle>,
      );
    }

    if (poop.hasBlood) {
      out.push(
        <Subtitle key="hasBlood" style={{ marginTop: 25 }}>
          Blut im Stuhl!
        </Subtitle>,
      );
    }

    if (poop.additionalInformation) {
      out.push(
        <Subtitle
          key="additionalInformation-headline"
          style={{ marginTop: 25 }}
        >
          zusätzliche Informationen
        </Subtitle>,
      );
      out.push(
        <Text key="additionalInformation-value">
          {poop.additionalInformation}
        </Text>,
      );
    }

    return out;
  }

  onGoingBack() {
    const { navigation } = this.props;

    navigation.goBack();
  }

  render() {
    const { navigation, poop, onEditPoop } = this.props;

    const date = new Date(poop.date);

    return (
      <View>
        <NavigationBar
          leftComponent={<Icon name="back" onPress={this.onGoingBack} />}
          rightComponent={
            <Icon
              name="edit"
              onPress={() => {
                onEditPoop({ id: poop.id });
                navigation.navigate('PoopEdit');
              }}
            />
          }
          title="Stuhlgang"
          styleName="inline"
        />
        <StandardView>
          <Heading>{this.formatDate(date)}</Heading>
          <Title>{this.formatTime(date)}</Title>
          <Subtitle style={{ marginTop: 25 }}>Qualität</Subtitle>
          <Text>{this.createQuality()}</Text>
          <Subtitle style={{ marginTop: 25 }}>Konsistenz</Subtitle>
          <Text>{this.createConsistency()}</Text>
          <Subtitle style={{ marginTop: 25 }}>Farbe</Subtitle>
          <Text>{this.createColor()}</Text>
          {this.createSecondaryInformations()}
        </StandardView>
      </View>
    );
  }
}

export default PoopDetails;
