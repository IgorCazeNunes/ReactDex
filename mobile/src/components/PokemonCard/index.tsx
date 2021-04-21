import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import TypeBadge from '../TypeBadge';

import charizardImage from '../../assets/charizard.png';

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

    const handleNavigateToDetails = useCallback(() => {
        navigation.navigate('PokemonDetails');
    }, [navigation]);

    return (
        <S.Container
            key={pokemon.id}
            type={pokemon.types[0].type.name}
            onPress={() => {
                handleNavigateToDetails();
            }}
        >
            <S.CardTitle>
                <S.PokemonNumber>{`00${pokemon.id} - `}</S.PokemonNumber>
                <S.PokemonName>{pokemon.name}</S.PokemonName>
            </S.CardTitle>

            <S.CardContent>
                <S.TypeList>
                    {pokemon.types.map(typeData => (
                        <S.TypeContainer key={pokemon.id + typeData.type.name}>
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
        </S.Container>
    );
};

export default PokemonCard;
