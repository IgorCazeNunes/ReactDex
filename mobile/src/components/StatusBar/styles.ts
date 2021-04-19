import styled from 'styled-components/native';

import { lighten, darken } from 'polished';

interface StatusData {
    statusName:
        | 'hp'
        | 'attack'
        | 'defense'
        | 'special_attack'
        | 'special_defense'
        | 'speed';
}

export const Container = styled.View<StatusData>`
    display: flex;
    justify-content: center;

    width: 100%;
    height: 25px;

    margin: 0;

    position: relative;
    border-radius: 5px;

    background: ${props =>
        lighten(0.2, props.theme.statusBackground[props.statusName])};
`;

export const ProgressionBar = styled.View<StatusData>`
    flex: 1;
    border-radius: 5px;
    background: ${props => props.theme.statusBackground[props.statusName]};
`;

export const StatusText = styled.Text`
    position: absolute;

    width: 100%;

    color: ${props => props.theme.font.black};
    font-size: 16px;
    font-family: 'ChakraPetch-SemiBold';
    text-align: center;
    text-transform: uppercase;
`;
