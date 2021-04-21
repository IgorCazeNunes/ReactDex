import React, { useCallback, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { darken } from 'polished';

import formatNumber from '../../utils/formatIdToString';

import charizardImage from '../../assets/charizard.png';

import TypeBadge from '../TypeBadge';

import * as S from './styles';

interface PokemonData {
    pokemon: PokemonProps;
}

interface PokemonProps {
    id: number;
    name: string;
    sprites: {
        other: {
            'official-artwork': {
                front_default: string;
            };
        };
    };
    types: Array<TypeData>;
}

export interface TypeData {
    slot: number;
    type: {
        name:
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
    };
}

const PokemonCard: React.FC<PokemonData> = ({ pokemon }: PokemonData) => {
    const navigation = useNavigation();
    const theme = useTheme();

    const handleNavigateToDetails = useCallback(() => {
        navigation.navigate('PokemonDetails');
    }, [navigation]);

    const formatedNumber = useMemo(() => {
        return formatNumber(pokemon.id);
    }, [pokemon.id]);

    const primaryColorHex = useMemo(() => {
        return theme.typeBackground[pokemon.types[0].type.name];
    }, [pokemon.types, theme.typeBackground]);

    const secondaryColorHex = useMemo(() => {
        return darken(0.1, theme.typeBackground[pokemon.types[0].type.name]);
    }, [pokemon.types, theme.typeBackground]);

    return (
        <S.Container
            key={pokemon.id}
            type={pokemon.types[0].type.name}
            onPress={() => {
                handleNavigateToDetails();
            }}
        >
            <S.ContainerBackground
                start={{ x: 0.25, y: 0.5 }}
                end={{ x: 0.5, y: 0.85 }}
                locations={[1, 0.5]}
                colors={[primaryColorHex, secondaryColorHex]}
            >
                <S.CardTitle>
                    <S.PokemonNumber>{`${formatedNumber} - `}</S.PokemonNumber>
                    <S.PokemonName>{pokemon.name}</S.PokemonName>
                </S.CardTitle>

                <S.CardContent>
                    <S.TypeList>
                        {pokemon.types.map(typeData => (
                            <S.TypeContainer
                                key={pokemon.id + typeData.type.name}
                            >
                                <TypeBadge type={typeData.type.name} />
                            </S.TypeContainer>
                        ))}
                    </S.TypeList>

                    <S.PokemonImageContainer>
                        <S.PokemonImage
                            // source={{
                            //     uri:
                            //         pokemon.sprites.other['official-artwork']
                            //             .front_default,
                            // }}

                            source={charizardImage}
                            resizeMode="cover"
                        />
                    </S.PokemonImageContainer>
                </S.CardContent>
            </S.ContainerBackground>
        </S.Container>
    );
};

export default PokemonCard;
