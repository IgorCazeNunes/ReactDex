import React from 'react';

import { FiLinkedin, FiGithub } from 'react-icons/fi';

import LogoPokeball from '../../assets/pokeball.svg';

import { Container, Title, NavList } from './styles';

const Header: React.FC = () => (
  <Container>
    <Title>
      <img src={LogoPokeball} alt="Pokeball" />
      <span>ReactDex</span>
    </Title>

    <NavList>
      <li>
        <a href="https://www.linkedin.com/in/igorcazenunes/">
          <FiLinkedin size={18} />
          LinkedIn
        </a>
      </li>

      <li>
        <a href="https://github.com/IgorCazeNunes/ReactDex">
          <FiGithub size={18} />
          Github
        </a>
      </li>
    </NavList>
  </Container>
);

export default Header;
