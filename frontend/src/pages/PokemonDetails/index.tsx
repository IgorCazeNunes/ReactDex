import React, { useCallback, useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import Header from '../../components/Header';
import Loader from '../../components/Loader';
import TypeBadge from '../../components/TypeBadge';
import { TypeData } from '../Dashboard';

import {
  Container,
  Content,
  ContainerHeader,
  PokemonDescription,
  PokemonAside,
  PokemonAbout,
  PokemonStats,
} from './styles';

import api from '../../services/api';
import formatIdToString from '../../utils/formatIdToString';

interface PokemonRequest {
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
      name: string;
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
      name: string;
    };
  }>;
}

const PokemonDetails: React.FC = () => {
  const { params } = useRouteMatch<{ id: string }>();

  const [pokemon, setPokemon] = useState<PokemonData>();

  const getPokemon = useCallback(async (pokemonId: string) => {
    const { data: pokemonData } = await api.get<PokemonRequest>(
      `pokemon/${pokemonId}`,
    );

    const { data: pokemonSpeciesData } = await api.get<PokemonSpeciesRequest>(
      `pokemon-species/${pokemonId}`,
    );

    const id = formatIdToString(Number.parseFloat(pokemonId));
    const height = `${pokemonData.height / 10}m`;
    const weight = `${pokemonData.weight / 10}kg`;

    let sprite = pokemonData.sprites.front_default;

    if (pokemonData.sprites.other['official-artwork'].front_default) {
      sprite = pokemonData.sprites.other['official-artwork'].front_default;
    }

    let eggGroup = 'Unknown Egg Group';

    if (pokemonSpeciesData.egg_groups.length) {
      eggGroup = pokemonSpeciesData.egg_groups.map(egg => egg.name).join(' ');
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
  }, []);

  useEffect(() => {
    getPokemon(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header />

      {pokemon ? (
        <Content type={pokemon?.types[0].type.name || 'normal'}>
          <ContainerHeader>
            <Link to="/">
              <FiChevronLeft size={16} />
              <span>Back</span>
            </Link>

            <span>{`${pokemon?.id} ${pokemon?.name}`}</span>
          </ContainerHeader>

          <PokemonDescription>
            <PokemonAside>
              <img src={pokemon?.sprite} alt={pokemon?.name} />

              <ul>
                {pokemon?.types.map(typeData => (
                  <li key={typeData.type.name}>
                    <TypeBadge type={typeData.type.name} />
                  </li>
                ))}
              </ul>
            </PokemonAside>

            <div>
              <PokemonAbout>
                <h2>About</h2>

                <ul>
                  <li>
                    <p>{pokemon?.description}</p>
                  </li>

                  <li>
                    <div>
                      <h3>Height:</h3>
                      <span>{pokemon?.height}</span>
                    </div>

                    <div>
                      <h3>Weight:</h3>
                      <span>{pokemon?.weight}</span>
                    </div>
                  </li>

                  <li>
                    <div>
                      <h3>Habitat:</h3>
                      <span>{pokemon?.habitat}</span>
                    </div>

                    <div>
                      <h3>Egg Group:</h3>
                      <span>
                        {
                          // eslint-disable-next-line camelcase
                          pokemon?.eggGroup
                        }
                      </span>
                    </div>
                  </li>
                </ul>
              </PokemonAbout>

              <PokemonStats>
                <h2>Stats</h2>

                <ul>
                  {pokemon?.stats.map(statData => (
                    <li key={statData.stat.name}>
                      <h3>{statData.stat.name}</h3>
                      <span>{statData.base_stat}</span>
                    </li>
                  ))}
                </ul>
              </PokemonStats>
            </div>
          </PokemonDescription>
        </Content>
      ) : (
        <Loader />
      )}
    </Container>
  );
};
export default PokemonDetails;
