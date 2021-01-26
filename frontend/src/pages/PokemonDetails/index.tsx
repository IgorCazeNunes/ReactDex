import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import Header from '../../components/Header';
import TypeBadge from '../../components/TypeBadge';

import CharizardImage from '../../assets/charizard-render.png';

import {
  Container,
  Content,
  ContainerHeader,
  PokemonDescription,
  PokemonStats,
  PokemonStat,
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

        <span>999 - Chesnaught</span>
      </ContainerHeader>

      <PokemonDescription>
        <aside>
          <img src={CharizardImage} alt="Charizard" />

          <ul>
            <li>
              <TypeBadge type="fire" />
            </li>
            <li>
              <TypeBadge type="dragon" />
            </li>
          </ul>
        </aside>

        <article>
          <h2>About</h2>

          <ul>
            <li>
              <h3>Titulo</h3>
              <p>Conteudo</p>
            </li>

            <hr />

            <li>
              <div>
                <h3>Titulo</h3>
                <p>Conteudo</p>
              </div>

              <div>
                <h3>Titulo</h3>
                <p>Conteudo</p>
              </div>
            </li>

            <hr />

            <li>
              <h3>Titulo</h3>
              <p>Conteudo</p>
            </li>

            <hr />

            <li>
              <h3>Titulo</h3>
              <p>Conteudo</p>
            </li>
          </ul>
        </article>
      </PokemonDescription>

      <PokemonStats>
        <h2>Stats</h2>

        <ul>
          <PokemonStat>
            <h3>hp</h3>
            <span>123</span>
          </PokemonStat>

          <PokemonStat>
            <h3>speed</h3>
            <span>123</span>
          </PokemonStat>

          <PokemonStat>
            <h3>atk</h3>
            <span>123</span>
          </PokemonStat>

          <PokemonStat>
            <h3>sp. atk</h3>
            <span>123</span>
          </PokemonStat>

          <PokemonStat>
            <h3>def</h3>
            <span>123</span>
          </PokemonStat>

          <PokemonStat>
            <h3>sp. def</h3>
            <span>123</span>
          </PokemonStat>
        </ul>
      </PokemonStats>
    </Content>
  </Container>
);

export default PokemonDetails;
