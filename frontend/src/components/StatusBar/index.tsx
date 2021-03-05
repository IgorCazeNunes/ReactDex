/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';

import { Container } from './styles';

interface StatusBarData {
  name: string;
  baseStat: number;
}

type StatusName =
  | 'hp'
  | 'attack'
  | 'defense'
  | 'special_attack'
  | 'special_defense'
  | 'speed';

const StatusBar: React.FC<StatusBarData> = ({
  baseStat,
  name,
}: StatusBarData) => {
  const [statusName, setStatusName] = useState<StatusName>('hp');
  const [statInPercent, setPercentStat] = useState(0);

  const percentToMaxStat = Math.round((baseStat * 100) / 255);

  useEffect(() => {
    if (name === 'attack' || name === 'defense' || name === 'speed') {
      setStatusName(name);
    } else if (name === 'special-attack') {
      setStatusName('special_attack');
    } else if (name === 'special-defense') {
      setStatusName('special_defense');
    }

    setPercentStat(percentToMaxStat);
  }, [name, percentToMaxStat]);

  return (
    <Container statusName={statusName}>
      <div>
        <div style={{ width: `${statInPercent}%` }} />

        <span>{baseStat}</span>
      </div>
    </Container>
  );
};

export default StatusBar;
