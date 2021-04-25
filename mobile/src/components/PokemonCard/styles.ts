import styled from 'styled-components/native';

import { darken } from 'polished';

import LinearGradient from 'react-native-linear-gradient';

export interface PokemonItemProps {
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

export const Container = styled.TouchableHighlight<PokemonItemProps>`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 200px;

    margin: 10px 0;

    background-color: ${props => props.theme.typeBackground[props.type]};

    border-radius: 10px;

    elevation: 5;
`;

export const ContainerBackground = styled(LinearGradient)`
    flex: 1;
    padding: 10px;
    border-radius: 10px;
`;

export const CardTitle = styled.View`
    display: flex;
    flex-direction: row;

    padding-left: 5px;
    height: 30px;
`;

export const PokemonNumber = styled.Text`
    color: ${props => props.theme.font.white};

    font-family: 'ChakraPetch-SemiBold';
    font-size: 20px;
`;

export const PokemonName = styled.Text`
    color: ${props => props.theme.font.white};

    font-size: 20px;
    font-family: 'ChakraPetch-SemiBold';
    text-transform: capitalize;
`;

export const CardContent = styled.View`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
`;

export const TypeList = styled.View`
    width: 40%;
`;

export const TypeContainer = styled.View`
    margin-top: 3px;
`;

export const PokemonImageContainer = styled.View`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    width: 40%;
    height: 140px;
`;

export const PokemonImage = styled.Image`
    width: 100%;
    height: 100%;
`;
