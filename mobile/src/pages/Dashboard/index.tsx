import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import * as S from './styles';
import PokemonCard from '../../components/PokemonCard';

export interface IPokemonProps {
    id: number;
    name: string;
    sprites: {
        other: {
            'official-artwork': {
                front_default: string;
            };
        };
    };
    types: Array<ITypeData>;
}

export interface ITypeData {
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

const Dashboard: React.FC = () => {
    const navigation = useNavigation();

    const handleNavigateToDetails = useCallback(() => {
        navigation.navigate('PokemonDetails');
    }, [navigation]);

    const fakePokemonData: IPokemonProps = {
        id: 0,
        name: 'charizard',
        sprites: {
            other: {
                'official-artwork': {
                    front_default: 'kkkkkkkkkkkkkk',
                },
            },
        },
        types: [
            {
                slot: 0,
                type: {
                    name: 'fire',
                },
            },
            {
                slot: 1,
                type: {
                    name: 'flying',
                },
            },
            {
                slot: 2,
                type: {
                    name: 'dragon',
                },
            },
        ],
    };

    const fakePokemonList: IPokemonProps[] = [
        {
            ...fakePokemonData,
            id: 1,
        },
        {
            ...fakePokemonData,
            id: 2,
            types: [
                {
                    slot: 0,
                    type: {
                        name: 'flying',
                    },
                },
            ],
        },
        {
            ...fakePokemonData,
            id: 3,
            types: [
                {
                    slot: 0,
                    type: {
                        name: 'psychic',
                    },
                },
            ],
        },
        {
            ...fakePokemonData,
            id: 4,
            types: [
                {
                    slot: 0,
                    type: {
                        name: 'electric',
                    },
                },
                {
                    slot: 1,
                    type: {
                        name: 'flying',
                    },
                },
            ],
        },
        {
            ...fakePokemonData,
            id: 5,
        },
    ];

    return (
        <S.Container>
            <S.PokemonList
                data={fakePokemonList}
                keyExtractor={item => item.id}
                ListHeaderComponent={<View />}
                ListHeaderComponentStyle={{
                    height: 20,
                }}
                ListFooterComponent={<View />}
                ListFooterComponentStyle={{
                    height: 40,
                }}
                renderItem={({ item }: { item: IPokemonProps }) => {
                    return <PokemonCard pokemon={item} />;
                }}
            />
        </S.Container>
    );
};

export default Dashboard;
