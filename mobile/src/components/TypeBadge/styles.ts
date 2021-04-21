import styled from 'styled-components/native';
import { darken } from 'polished';

import { TypeBadgeProps } from './index';

export const Container = styled.View<TypeBadgeProps>`
    display: flex;
    align-items: center;

    padding: 0 5px;
    margin: 2.5px 5px;

    background: ${props => props.theme.typeBackground[props.type]};
    border: 1px solid
        ${props => darken(0.2, props.theme.typeBackground[props.type])};

    border-radius: 10px;
    elevation: 5;
`;

export const BadgeName = styled.Text`
    color: ${props => props.theme.font.white};

    font-size: 16px;
    text-transform: uppercase;
    font-family: 'ChakraPetch-SemiBold';
`;
