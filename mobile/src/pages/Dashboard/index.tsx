import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';

import api from '../../services/api';

import PokemonCard from '../../components/PokemonCard';

import * as S from './styles';

interface IPokemonListData {
    name: string;
    url: string;
}

export interface IPokemonData {
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
    const [nextOffset, setNextOffset] = useState('');
    const [pokemonList, setPokemonList] = useState<IPokemonData[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const getPokemonList = useCallback(async () => {
        setIsLoading(true);

        const { data } = await api.get(`pokemon?${nextOffset}`);

        const dataResults: IPokemonListData[] = data.results;

        const pokemonsPromise = await dataResults.map(async pokemon => {
            const response = await api.get<IPokemonData>(
                `pokemon/${pokemon.name}`,
            );
            return response.data;
        });

        const pokemons = await Promise.all(pokemonsPromise);

        setPokemonList([...pokemonList, ...pokemons]);

        const splittedNextLink = data.next.split('?');
        setNextOffset(splittedNextLink[1]);

        setIsLoading(false);
    }, [nextOffset, pokemonList]);

    useEffect(() => {
        getPokemonList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fakePokemonData: IPokemonData = {
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

    const fakePokemonList: IPokemonData[] = [
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
                data={pokemonList}
                keyExtractor={item => item.id}
                ListHeaderComponent={<View />}
                ListHeaderComponentStyle={{
                    height: 20,
                }}
                onEndReached={getPokemonList}
                ListFooterComponent={
                    <>
                        {isLoading && <S.Loader size="large" color="#3d3d4d" />}
                    </>
                }
                ListFooterComponentStyle={{
                    height: 60,
                }}
                renderItem={({ item }: { item: IPokemonData }) => {
                    return <PokemonCard pokemon={item} />;
                }}
            />
        </S.Container>
    );
};

export default Dashboard;
