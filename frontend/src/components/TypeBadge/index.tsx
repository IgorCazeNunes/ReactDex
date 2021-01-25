import React from 'react';

import { Container } from './styles';

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
}: TypeBadgeProps) => <Container type={type}>{type}</Container>;

export default TypeBadge;
