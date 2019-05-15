import React, { ReactElement, FunctionComponent } from 'react';
import { Card, Subtitle, TouchableOpacity } from '@shoutem/ui';

import { Poop } from 'container/Poop/types';
import PoopDetails from './PoopDetails';

interface Props {
  navigation: Navigation;
  poops: Poop[];
  onShowDetails: Function;
}

const PoopList: FunctionComponent<Props> = ({
  navigation,
  poops,
  onShowDetails: showDetails,
}: Props): ReactElement => {
  const getTwoDigitNumber = (value: number): string =>
    value < 10 ? `0${value}` : String(value);

  const formatDate = (_date: string): string => {
    const date = new Date(_date);

    return `${getTwoDigitNumber(date.getDate())}.${getTwoDigitNumber(
      date.getMonth() + 1,
    )}.${date.getFullYear()}`;
  };

  const onShowDetails = ({ id }: { id: string }): void => {
    showDetails({ id });
    navigation.push('PoopDetails');
  };

  return (
    <Card
      style={{
        width: '100%',
        padding: 10,
      }}
    >
      <Subtitle>{formatDate(poops[0].date)}</Subtitle>

      {poops.map(
        (poop): ReactElement => (
          <TouchableOpacity
            key={`entry-${poop.date}`}
            onPress={(): void => onShowDetails({ id: poop.id })}
          >
            <PoopDetails poop={poop} />
          </TouchableOpacity>
        ),
      )}
    </Card>
  );
};

export default PoopList;
