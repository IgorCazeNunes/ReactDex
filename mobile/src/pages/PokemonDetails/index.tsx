import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import formatNumber from '../../utils/formatIdToString';

import { TypeData } from '../../components/PokemonCard';
import api from '../../services/api';

import TypeBadge from '../../components/TypeBadge';
import StatusBar from '../../components/StatusBar';

import * as S from './styles';

interface PokemonRequest {
    id: number;

    name: string;

    height: number;

    weight: number;

    sprites: {
        // eslint-disable-next-line camelcase
        front_default: string;
        other: {
            'official-artwork': {
                // eslint-disable-next-line camelcase
                front_default: string;
            };
        };
    };

    types: Array<TypeData>;

    stats: Array<{
        // eslint-disable-next-line camelcase
        base_stat: number;
        stat: {
            name:
                | 'hp'
                | 'attack'
                | 'defense'
                | 'special_attack'
                | 'special_defense'
                | 'speed';
        };
    }>;
}

interface PokemonSpeciesRequest {
    habitat: {
        name: string;
    };

    // eslint-disable-next-line camelcase
    egg_groups: Array<{
        name: string;
    }>;

    // eslint-disable-next-line camelcase
    flavor_text_entries: Array<{
        // eslint-disable-next-line camelcase
        flavor_text: string;

        language: {
            name: string;
        };

        version: {
            name: string;
        };
    }>;
}

interface PokemonData {
    id: string;
    name: string;
    height: string;
    weight: string;
    description: string;
    habitat: string;
    sprite: string;
    eggGroup: string;
    types: Array<TypeData>;
    stats: Array<{
        // eslint-disable-next-line camelcase
        base_stat: number;
        stat: {
            name:
                | 'hp'
                | 'attack'
                | 'defense'
                | 'special_attack'
                | 'special_defense'
                | 'speed';
        };
    }>;
}

type ParamList = {
    Dashboard: {
        id: number;
    };
};

const PokemonDetails: React.FC = () => {
    const { params } = useRoute<RouteProp<ParamList, 'Dashboard'>>();

    const navigation = useNavigation();

    const [pokemon, setPokemon] = useState<PokemonData>();
    const [isLoading, setIsLoading] = useState(false);

    const getPokemon = useCallback(async (pokemonId: number) => {
        setIsLoading(true);

        const { data: pokemonData } = await api.get<PokemonRequest>(
            `pokemon/${pokemonId}`,
        );

        const {
            data: pokemonSpeciesData,
        } = await api.get<PokemonSpeciesRequest>(
            `pokemon-species/${pokemonId}`,
        );

        const id = formatNumber(pokemonData.id);
        const height = `${pokemonData.height / 10}m`;
        const weight = `${pokemonData.weight / 10}kg`;

        let sprite = pokemonData.sprites.front_default;

        if (pokemonData.sprites.other['official-artwork'].front_default) {
            sprite =
                pokemonData.sprites.other['official-artwork'].front_default;
        }

        let eggGroup = 'Unknown Egg Group';

        if (pokemonSpeciesData.egg_groups.length) {
            eggGroup = pokemonSpeciesData.egg_groups
                .map(egg => egg.name)
                .join(' ');
        }

        let habitat = 'Unknown Habitat';

        if (pokemonSpeciesData.habitat) {
            habitat = pokemonSpeciesData.habitat.name;
        }

        let descriptions = pokemonSpeciesData.flavor_text_entries.filter(
            flavorText =>
                flavorText.language.name === 'en' &&
                (flavorText.version.name === 'sword' ||
                    flavorText.version.name === 'alpha-sapphire' ||
                    flavorText.version.name === 'emerald' ||
                    flavorText.version.name === 'black'),
        );

        if (descriptions.length < 0) {
            descriptions = pokemonSpeciesData.flavor_text_entries.filter(
                flavorText => flavorText.language.name === 'en',
            );
        }

        const description = descriptions[0].flavor_text;

        setPokemon({
            id,
            name: pokemonData.name,
            height,
            weight,
            habitat,
            eggGroup,
            sprite,
            description,
            types: pokemonData.types,
            stats: pokemonData.stats,
        });

        setIsLoading(false);
    }, []);

    useEffect(() => {
        getPokemon(params.id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleNavigateBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        <S.Container>
            <S.ReturnButton
                onPress={() => {
                    handleNavigateBack();
                }}
            >
                <S.ReturnButtonIcon name="chevron-left" />

                <S.ReturnButtonText>Back</S.ReturnButtonText>
            </S.ReturnButton>

            {isLoading ? (
                <>
                    <S.Loader size="large" color="#3d3d4d" />
                </>
            ) : (
                pokemon && (
                    <>
                        <S.HeaderContainer>
                            <S.PokemonImage source={{ uri: pokemon.sprite }} />

                            <S.BadgeContainer>
                                {pokemon.types.map(type => (
                                    <TypeBadge
                                        key={type.type.name}
                                        type={type.type.name}
                                    />
                                ))}
                            </S.BadgeContainer>
                        </S.HeaderContainer>

                        <S.MainContent>
                            <S.ContentTitle>{`${pokemon.id} - ${pokemon.name}`}</S.ContentTitle>

                            <S.DetailsSection>
                                <S.DetailsMainContainer>
                                    <S.SectionTitle>About</S.SectionTitle>

                                    <S.MainContentAbout>
                                        {pokemon.description}
                                    </S.MainContentAbout>
                                </S.DetailsMainContainer>

                                <S.DetailsSecondaryContainer>
                                    <S.DetailsSecondaryContent>
                                        <S.SectionSubTitle>
                                            Height
                                        </S.SectionSubTitle>

                                        <S.MainContentText>
                                            {pokemon.height}
                                        </S.MainContentText>
                                    </S.DetailsSecondaryContent>

                                    <S.DetailsSecondaryContent>
                                        <S.SectionSubTitle>
                                            Weight
                                        </S.SectionSubTitle>

                                        <S.MainContentText>
                                            {pokemon.weight}
                                        </S.MainContentText>
                                    </S.DetailsSecondaryContent>
                                </S.DetailsSecondaryContainer>

                                <S.DetailsSecondaryContainer>
                                    <S.DetailsSecondaryContent>
                                        <S.SectionSubTitle>
                                            Habitat
                                        </S.SectionSubTitle>

                                        <S.MainContentText>
                                            {pokemon.habitat}
                                        </S.MainContentText>
                                    </S.DetailsSecondaryContent>

                                    <S.DetailsSecondaryContent>
                                        <S.SectionSubTitle>
                                            Egg Group
                                        </S.SectionSubTitle>

                                        <S.MainContentText>
                                            {pokemon.eggGroup}
                                        </S.MainContentText>
                                    </S.DetailsSecondaryContent>
                                </S.DetailsSecondaryContainer>
                            </S.DetailsSection>

                            <S.StatusSection>
                                <S.SectionTitle>Status</S.SectionTitle>

                                <S.StatusList>
                                    {pokemon.stats &&
                                        pokemon.stats.map(status => (
                                            <S.StatusContainer
                                                key={status.stat.name}
                                            >
                                                <S.SectionSubTitle>
                                                    {status.stat.name}
                                                </S.SectionSubTitle>

                                                <StatusBar
                                                    name={status.stat.name}
                                                    baseStat={status.base_stat}
                                                />
                                            </S.StatusContainer>
                                        ))}
                                </S.StatusList>
                            </S.StatusSection>
                        </S.MainContent>
                    </>
                )
            )}
        </S.Container>
    );
};

export default PokemonDetails;
