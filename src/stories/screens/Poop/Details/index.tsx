import React, { PureComponent, ReactElement, ReactNode } from 'react';
import {
  View,
  Heading,
  Title,
  Subtitle,
  Text,
  NavigationBar,
  Icon,
} from '@shoutem/ui';

import { Poop } from 'container/Poop/types';
import { StandardView } from 'ui/Layout';

interface Props {
  navigation: Navigation;
  poop: Poop;
  onDetailsPoop: Function;
  onEditPoop: Function;
}

class PoopDetails extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);

    this.onGoingBack = this.onGoingBack.bind(this);
  }

  componentWillUnmount(): void {
    const { onDetailsPoop } = this.props;

    onDetailsPoop({ id: undefined });
  }

  formatDate(date: Date): string {
    const enforceTwoDigits = (value: number): string =>
      value < 10 ? `0${value}` : String(value);

    return `${enforceTwoDigits(date.getDate())}.${enforceTwoDigits(
      date.getMonth() + 1,
    )}.${date.getFullYear()}`;
  }

  formatTime(date: Date): string {
    const enforceTwoDigits = (value: number): string =>
      value < 10 ? `0${value}` : String(value);

    return `${enforceTwoDigits(date.getHours())}:${enforceTwoDigits(
      date.getMinutes(),
    )} Uhr`;
  }

  createQuality(): ReactElement {
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

  createConsistency(): ReactElement {
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

  createColor(): ReactElement {
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

  createSecondaryInformations(): ReactNode {
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

  onGoingBack(): void {
    const { navigation } = this.props;

    navigation.goBack();
  }

  render(): ReactElement {
    const { navigation, poop, onEditPoop } = this.props;

    const date = new Date(poop.date);

    return (
      <View>
        <NavigationBar
          leftComponent={<Icon name="back" onPress={this.onGoingBack} />}
          rightComponent={
            <Icon
              name="edit"
              onPress={(): void => {
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
