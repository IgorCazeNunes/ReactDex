import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import Header from '../../components/Header';
import TypeBadge from '../../components/TypeBadge';

import {
  Container,
  Content,
  ContainerHeader,
  PokemonDescription,
  PokemonAside,
  PokemonAbout,
  PokemonStats,
} from './styles';

interface TypeData {
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

interface PokemonRequest {
  name: string;

  height: number;

  weight: number;

  sprites: {
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
  height: number;
  weight: number;
  sprites: {
    other: {
      'official-artwork': {
        // eslint-disable-next-line camelcase
        front_default: string;
      };
    };
  };
  habitat: {
    name: string;
  };
  types: Array<TypeData>;
  stats: Array<{
    // eslint-disable-next-line camelcase
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
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

const PokemonDetails: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <ContainerHeader>
          <Link to="/">
            <FiChevronLeft size={16} />
            <span>Back</span>
          </Link>

          <span>003 Charizard</span>
        </ContainerHeader>

        <PokemonDescription>
          <PokemonAside>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
              alt="Charizard"
            />

            <ul>
              <li>
                <TypeBadge type="fire" />
              </li>

              <li>
                <TypeBadge type="dragon" />
              </li>
            </ul>
          </PokemonAside>

          <div>
            <PokemonAbout>
              <h2>About</h2>

              <ul>
                <li>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto ratione maxime atque fugit at enim et rerum eius
                    accusantium, neque soluta quisquam! Eum voluptatibus est
                    iste animi, officiis molestias minus!
                  </p>
                </li>

                <li>
                  <div>
                    <h3>Height:</h3>
                    <span>1.7m</span>
                  </div>

                  <div>
                    <h3>Weight:</h3>
                    <span>905kg</span>
                  </div>
                </li>

                <li>
                  <div>
                    <h3>Habitat:</h3>
                    <span>Mountain</span>
                  </div>

                  <div>
                    <h3>Egg Group:</h3>
                    <span>Monster Dragon</span>
                  </div>
                </li>
              </ul>
            </PokemonAbout>

            <PokemonStats>
              <h2>Stats</h2>

              <ul>
                <li>
                  <h3>hp</h3>
                  <span>123</span>
                </li>

                <li>
                  <h3>attack</h3>
                  <span> 123</span>
                </li>

                <li>
                  <h3>defense</h3>
                  <span>123</span>
                </li>

                <li>
                  <h3>sp. attack</h3>
                  <span>123</span>
                </li>

                <li>
                  <h3>sp. defense</h3>
                  <span>123</span>
                </li>

                <li>
                  <h3>speed</h3>
                  <span>123</span>
                </li>
              </ul>
            </PokemonStats>
          </div>
        </PokemonDescription>
      </Content>
    </Container>
  );
};
export default PokemonDetails;
