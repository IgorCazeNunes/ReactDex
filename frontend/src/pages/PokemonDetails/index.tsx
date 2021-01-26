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
  PokemonDescriptionAside,
  PokemonDescriptionAbout,
  PokemonStats,
} from './styles';

const PokemonDetails: React.FC = () => (
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
        <PokemonDescriptionAside>
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
        </PokemonDescriptionAside>

        <PokemonDescriptionAbout>
          <h2>About</h2>

          <ul>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                ratione maxime atque fugit at enim et rerum eius accusantium,
                neque soluta quisquam! Eum voluptatibus est iste animi, officiis
                molestias minus!
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
        </PokemonDescriptionAbout>
      </PokemonDescription>

      <PokemonStats>
        <h2>Stats</h2>

        <ul>
          <li>
            <h3>hp</h3>
            <span>123</span>
          </li>

          <li>
            <h3>speed</h3>
            <span> 123</span>
          </li>

          <li>
            <h3>atk</h3>
            <span>123</span>
          </li>

          <li>
            <h3>sp. atk</h3>
            <span>123</span>
          </li>

          <li>
            <h3>def</h3>
            <span>123</span>
          </li>

          <li>
            <h3>sp. def</h3>
            <span>123</span>
          </li>
        </ul>
      </PokemonStats>
    </Content>
  </Container>
);

export default PokemonDetails;
