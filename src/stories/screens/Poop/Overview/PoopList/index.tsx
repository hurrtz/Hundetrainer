import React, { PureComponent, ReactElement } from 'react';
import { Card, Subtitle, TouchableOpacity } from '@shoutem/ui';

import { Poop } from 'container/Poop/types';
import PoopDetails from './PoopDetails';

interface Props {
  navigation: Navigation;
  poops: Poop[];
  onShowDetails: Function;
  onEditPoop: Function;
}

class PoopList extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);

    this.onShowDetails = this.onShowDetails.bind(this);
  }

  getTwoDigitNumber(value: number): string {
    return value < 10 ? `0${value}` : String(value);
  }

  formatDate(_date: string): string {
    const date = new Date(_date);

    return `${this.getTwoDigitNumber(date.getDate())}.${this.getTwoDigitNumber(
      date.getMonth() + 1,
    )}.${date.getFullYear()}`;
  }

  onShowDetails({ id }: { id: string }): void {
    const { navigation, onShowDetails } = this.props;

    onShowDetails({ id });
    navigation.push('PoopDetails');
  }

  render(): ReactElement {
    const { poops } = this.props;

    return (
      <Card
        style={{
          width: '100%',
          padding: 10,
        }}
      >
        <Subtitle>{this.formatDate(poops[0].date)}</Subtitle>

        {poops.map(
          (poop): ReactElement => (
            <TouchableOpacity
              key={`entry-${poop.date}`}
              onPress={(): void => this.onShowDetails({ id: poop.id })}
            >
              <PoopDetails poop={poop} />
            </TouchableOpacity>
          ),
        )}
      </Card>
    );
  }
}

export default PoopList;
