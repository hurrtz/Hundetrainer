import React, { PureComponent } from 'react';
import { Card, Subtitle, TouchableOpacity } from '@shoutem/ui';

import { IPoop } from 'apptypes/poop';
import { TNavigation } from 'apptypes/base';
import PoopDetails from './PoopDetails';

interface Props {
  navigation: TNavigation;
  poops: IPoop[];
  onShowDetails: Function;
  onEditPoop: Function;
}

interface State {}

class PoopList extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.onShowDetails = this.onShowDetails.bind(this);
  }

  getTwoDigitNumber(value: number): string {
    return value < 10 ? `0${value}` : String(value);
  }

  formatDate(_date: string) {
    const date = new Date(_date);

    return `${this.getTwoDigitNumber(date.getDate())}.${this.getTwoDigitNumber(
      date.getMonth() + 1,
    )}.${date.getFullYear()}`;
  }

  onShowDetails({ id }: { id: String }) {
    const { navigation, onShowDetails } = this.props;

    onShowDetails({ id });
    navigation.push('PoopDetails');
  }

  render() {
    const { poops } = this.props;

    return (
      <Card
        style={{
          width: '100%',
          padding: 10,
        }}
      >
        <Subtitle>{this.formatDate(poops[0].date)}</Subtitle>

        {poops.map(poop => (
          <TouchableOpacity
            key={`entry-${poop.date}`}
            onPress={() => this.onShowDetails({ id: poop.id })}
          >
            <PoopDetails poop={poop} />
          </TouchableOpacity>
        ))}
      </Card>
    );
  }
}

export default PoopList;
