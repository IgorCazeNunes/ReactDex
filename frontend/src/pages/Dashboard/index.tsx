import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';

import Header from '../../components/Header';
import Loader from '../../components/Loader';
import TypeBadge from '../../components/TypeBadge';
import SearchModal from '../../components/SearchModal';

import api from '../../services/api';
import formatIdToString from '../../utils/formatIdToString';

import {
  Container,
  Content,
  PokemonList,
  PokemonItem,
  PokemonItemDescription,
} from './styles';

interface PokemonListData {
  name: string;
  url: string;
}

interface PokemonData {
  id: number;
  name: string;
  sprites: {
    other: {
      'official-artwork': {
        // eslint-disable-next-line camelcase
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

const Dashboard: React.FC = () => {
  const [nextOffset, setNextOffset] = useState('');
  const [pokemonList, setPokemonList] = useState<PokemonData[]>([]);

  const getPokemonList = useCallback(async () => {
    const { data } = await api.get(`pokemon?${nextOffset}`);

    const dataResults: PokemonListData[] = data.results;

    const pokemonsPromise = await dataResults.map(async pokemon => {
      const response = await api.get<PokemonData>(`pokemon/${pokemon.name}`);
      return response.data;
    });

    const pokemons = await Promise.all(pokemonsPromise);

    setPokemonList([...pokemonList, ...pokemons]);

    const nextArray = data.next.split('?');
    setNextOffset(nextArray[1]);
  }, [nextOffset, pokemonList]);

  useEffect(() => {
    getPokemonList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header />

      <SearchModal />

      <Content>
        <InfiniteScroll
          pageStart={0}
          loadMore={getPokemonList}
          hasMore={true || false}
          loader={<Loader key="loader" />}
        >
          <PokemonList>
            {pokemonList.map(pokemon => (
              <PokemonItem key={pokemon.id} type={pokemon.types[0].type.name}>
                <Link to={`/details/${pokemon.name}`}>
                  <strong>
                    <span>{`${formatIdToString(pokemon.id)} -`}</span>
                    {` ${pokemon.name}`}
                  </strong>

                  <PokemonItemDescription>
                    <ul>
                      {pokemon.types.map(typeData => (
                        <li key={pokemon.id + typeData.type.name}>
                          <TypeBadge type={typeData.type.name} />
                        </li>
                      ))}
                    </ul>

                    <img
                      src={
                        pokemon.sprites.other['official-artwork'].front_default
                      }
                      alt={pokemon.name}
                    />
                  </PokemonItemDescription>
                </Link>
              </PokemonItem>
            ))}
          </PokemonList>
        </InfiniteScroll>
      </Content>
    </Container>
  );
};

export default Dashboard;
