/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useMemo, useState } from 'react';

import * as S from './styles';

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

    const percentToMaxStat = useMemo(() => {
        return Math.round((baseStat * 100) / 255);
    }, [baseStat]);

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
        <S.Container statusName={statusName}>
            <S.ProgressionBar
                statusName={statusName}
                style={{ width: `${statInPercent}%` }}
            />

            <S.StatusText>{baseStat}</S.StatusText>
        </S.Container>
    );
};

export default StatusBar;
