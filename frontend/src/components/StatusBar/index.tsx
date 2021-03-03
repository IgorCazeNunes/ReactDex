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
  const [statInPercent, setPercentStat] = useState(0);
  const percentToMaxStat = Math.round((baseStat * 100) / 255);

  let statusName: StatusName = 'hp';
  if (name === 'attack' || name === 'defense' || name === 'speed') {
    statusName = name;
  } else if (name === 'special-attack') {
    statusName = 'special_attack';
  } else if (name === 'special-defense') {
    statusName = 'special_defense';
  }

  useEffect(() => {
    if (statInPercent < percentToMaxStat) {
      setPercentStat(statInPercent + 1);
    }
  }, [statInPercent, percentToMaxStat]);

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
