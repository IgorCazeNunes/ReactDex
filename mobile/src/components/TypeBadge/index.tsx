import React from 'react';

import * as S from './styles';

export interface TypeBadgeProps {
    type:
        | 'normal'
        | 'fire'
        | 'fighting'
        | 'water'
        | 'flying'
        | 'grass'
        | 'poison'
        | 'electric'
        | 'ground'
        | 'psychic'
        | 'rock'
        | 'ice'
        | 'bug'
        | 'dragon'
        | 'ghost'
        | 'dark'
        | 'steel'
        | 'fairy';
}

const TypeBadge: React.FC<TypeBadgeProps> = ({
    type = 'normal',
}: TypeBadgeProps) => {
    return (
        <S.Container type={type}>
            <S.BadgeName>{type}</S.BadgeName>
        </S.Container>
    );
};

export default TypeBadge;
