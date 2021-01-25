import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import TypeBadge from '../../components/TypeBadge';

import CharizardImage from '../../assets/charizard-render.png';

import {
  Container,
  Content,
  PokemonList,
  PokemonItem,
  PokemonItemDescription,
} from './styles';

const Dashboard: React.FC = () => (
  <Container>
    <Header />

    <Content>
      <PokemonList>
        <PokemonItem type="dragon">
          <Link to="/details/3">
            <strong>003 Charizard</strong>

            <PokemonItemDescription>
              <ul>
                <li>
                  <TypeBadge type="fire" />
                </li>
                <li>
                  <TypeBadge type="dragon" />
                </li>
              </ul>

              <img src={CharizardImage} alt="Charizard" />
            </PokemonItemDescription>
          </Link>
        </PokemonItem>

        <PokemonItem type="fighting">
          <Link to="/details/3">
            <strong>003 - Charizard</strong>

            <PokemonItemDescription>
              <ul>
                <li>
                  <TypeBadge type="fire" />
                </li>

                <li>
                  <TypeBadge type="dragon" />
                </li>

                <li>
                  <TypeBadge type="fighting" />
                </li>
              </ul>

              <img src={CharizardImage} alt="Charizard" />
            </PokemonItemDescription>
          </Link>
        </PokemonItem>

        <PokemonItem type="fire">
          <Link to="/details/3">
            <strong>003 - Charizard</strong>

            <PokemonItemDescription>
              <ul>
                <li>
                  <TypeBadge type="fire" />
                </li>
                <li>
                  <TypeBadge type="dragon" />
                </li>
              </ul>

              <img src={CharizardImage} alt="Charizard" />
            </PokemonItemDescription>
          </Link>
        </PokemonItem>

        <PokemonItem type="fire">
          <Link to="/details/3">
            <strong>003 - Charizard</strong>

            <PokemonItemDescription>
              <ul>
                <li>
                  <TypeBadge type="fire" />
                </li>
                <li>
                  <TypeBadge type="dragon" />
                </li>
              </ul>

              <img src={CharizardImage} alt="Charizard" />
            </PokemonItemDescription>
          </Link>
        </PokemonItem>

        <PokemonItem type="fire">
          <Link to="/details/3">
            <strong>003 - Charizard</strong>

            <PokemonItemDescription>
              <ul>
                <li>
                  <TypeBadge type="fire" />
                </li>
                <li>
                  <TypeBadge type="dragon" />
                </li>
              </ul>

              <img src={CharizardImage} alt="Charizard" />
            </PokemonItemDescription>
          </Link>
        </PokemonItem>

        <PokemonItem type="fire">
          <Link to="/details/3">
            <strong>003 - Charizard</strong>

            <PokemonItemDescription>
              <ul>
                <li>
                  <TypeBadge type="fire" />
                </li>
                <li>
                  <TypeBadge type="dragon" />
                </li>
              </ul>

              <img src={CharizardImage} alt="Charizard" />
            </PokemonItemDescription>
          </Link>
        </PokemonItem>

        <PokemonItem type="fire">
          <Link to="/details/3">
            <strong>003 - Charizard</strong>

            <PokemonItemDescription>
              <ul>
                <li>
                  <TypeBadge type="fire" />
                </li>
                <li>
                  <TypeBadge type="dragon" />
                </li>
              </ul>

              <img src={CharizardImage} alt="Charizard" />
            </PokemonItemDescription>
          </Link>
        </PokemonItem>

        <PokemonItem type="fire">
          <Link to="/details/3">
            <strong>003 - Charizard</strong>

            <PokemonItemDescription>
              <ul>
                <li>
                  <TypeBadge type="fire" />
                </li>
                <li>
                  <TypeBadge type="dragon" />
                </li>
              </ul>

              <img src={CharizardImage} alt="Charizard" />
            </PokemonItemDescription>
          </Link>
        </PokemonItem>

        <PokemonItem type="fire">
          <Link to="/details/3">
            <strong>003 - Charizard</strong>

            <PokemonItemDescription>
              <ul>
                <li>
                  <TypeBadge type="fire" />
                </li>
                <li>
                  <TypeBadge type="dragon" />
                </li>
              </ul>

              <img src={CharizardImage} alt="Charizard" />
            </PokemonItemDescription>
          </Link>
        </PokemonItem>

        <PokemonItem type="fire">
          <Link to="/details/3">
            <strong>003 - Charizard</strong>

            <PokemonItemDescription>
              <ul>
                <li>
                  <TypeBadge type="fire" />
                </li>
                <li>
                  <TypeBadge type="dragon" />
                </li>
              </ul>

              <img src={CharizardImage} alt="Charizard" />
            </PokemonItemDescription>
          </Link>
        </PokemonItem>

        <PokemonItem type="fire">
          <Link to="/details/3">
            <strong>003 Charizard</strong>

            <PokemonItemDescription>
              <ul>
                <li>
                  <TypeBadge type="fire" />
                </li>
                <li>
                  <TypeBadge type="dragon" />
                </li>
                <li>Fighting</li>
              </ul>

              <img src={CharizardImage} alt="Charizard" />
            </PokemonItemDescription>
          </Link>
        </PokemonItem>

        <PokemonItem type="fire">
          <Link to="/details/3">
            <strong>003 - Charizard</strong>

            <PokemonItemDescription>
              <ul>
                <li>
                  <TypeBadge type="fire" />
                </li>
                <li>
                  <TypeBadge type="dragon" />
                </li>
              </ul>

              <img src={CharizardImage} alt="Charizard" />
            </PokemonItemDescription>
          </Link>
        </PokemonItem>

        <PokemonItem type="fire">
          <Link to="/details/3">
            <strong>003 - Charizard</strong>

            <PokemonItemDescription>
              <ul>
                <li>
                  <TypeBadge type="fire" />
                </li>
                <li>
                  <TypeBadge type="dragon" />
                </li>
              </ul>

              <img src={CharizardImage} alt="Charizard" />
            </PokemonItemDescription>
          </Link>
        </PokemonItem>

        <PokemonItem type="fire">
          <Link to="/details/3">
            <strong>003 - Charizard</strong>

            <PokemonItemDescription>
              <ul>
                <li>
                  <TypeBadge type="fire" />
                </li>
                <li>
                  <TypeBadge type="dragon" />
                </li>
              </ul>

              <img src={CharizardImage} alt="Charizard" />
            </PokemonItemDescription>
          </Link>
        </PokemonItem>

        <PokemonItem type="fire">
          <Link to="/details/3">
            <strong>003 - Charizard</strong>

            <PokemonItemDescription>
              <ul>
                <li>
                  <TypeBadge type="fire" />
                </li>
                <li>
                  <TypeBadge type="dragon" />
                </li>
              </ul>

              <img src={CharizardImage} alt="Charizard" />
            </PokemonItemDescription>
          </Link>
        </PokemonItem>

        <PokemonItem type="fire">
          <Link to="/details/3">
            <strong>003 - Charizard</strong>

            <PokemonItemDescription>
              <ul>
                <li>
                  <TypeBadge type="fire" />
                </li>
                <li>
                  <TypeBadge type="dragon" />
                </li>
              </ul>

              <img src={CharizardImage} alt="Charizard" />
            </PokemonItemDescription>
          </Link>
        </PokemonItem>

        <PokemonItem type="fire">
          <Link to="/details/3">
            <strong>003 - Charizard</strong>

            <PokemonItemDescription>
              <ul>
                <li>
                  <TypeBadge type="fire" />
                </li>
                <li>
                  <TypeBadge type="dragon" />
                </li>
              </ul>

              <img src={CharizardImage} alt="Charizard" />
            </PokemonItemDescription>
          </Link>
        </PokemonItem>

        <PokemonItem type="fire">
          <Link to="/details/3">
            <strong>003 - Charizard</strong>

            <PokemonItemDescription>
              <ul>
                <li>
                  <TypeBadge type="fire" />
                </li>
                <li>
                  <TypeBadge type="dragon" />
                </li>
              </ul>

              <img src={CharizardImage} alt="Charizard" />
            </PokemonItemDescription>
          </Link>
        </PokemonItem>

        <PokemonItem type="fire">
          <Link to="/details/3">
            <strong>003 - Charizard</strong>

            <PokemonItemDescription>
              <ul>
                <li>
                  <TypeBadge type="fire" />
                </li>
                <li>
                  <TypeBadge type="dragon" />
                </li>
              </ul>

              <img src={CharizardImage} alt="Charizard" />
            </PokemonItemDescription>
          </Link>
        </PokemonItem>

        <PokemonItem type="fire">
          <Link to="/details/3">
            <strong>003 - Charizard</strong>

            <PokemonItemDescription>
              <ul>
                <li>
                  <TypeBadge type="fire" />
                </li>
                <li>
                  <TypeBadge type="dragon" />
                </li>
              </ul>

              <img src={CharizardImage} alt="Charizard" />
            </PokemonItemDescription>
          </Link>
        </PokemonItem>
      </PokemonList>
    </Content>
  </Container>
);

export default Dashboard;
