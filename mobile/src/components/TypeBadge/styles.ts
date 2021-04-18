import styled from 'styled-components/native';
import { darken } from 'polished';

import { TypeBadgeProps } from './index';

export const Container = styled.View<TypeBadgeProps>`
    padding: 0 10px;
    margin: 0 5px;

    background: ${props => props.theme.typeBackground[props.type]};
    border: 1px solid
        ${props => darken(0.2, props.theme.typeBackground[props.type])};

    border-radius: 10px;
`;

export const BadgeName = styled.Text`
    color: ${props => props.theme.font.white};

    font-size: 16px;
    text-transform: uppercase;
    font-family: 'ChakraPetch-Regular';
`;
