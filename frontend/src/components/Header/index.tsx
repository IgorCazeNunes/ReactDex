/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import { FiLinkedin, FiGithub } from 'react-icons/fi';

import LogoPokeball from '../../assets/pokeball.svg';

import { Container, Content, Title, NavList } from './styles';

const Header: React.FC = () => (
  <Container>
    <Content>
      <Title>
        <img src={LogoPokeball} alt="Pokeball" />
        <span>ReactDex</span>
      </Title>

      <NavList>
        <li>
          <a
            href="https://www.linkedin.com/in/igorcazenunes/"
            target="_blank"
            rel="Linkedin - Igor Cazé Nunes"
          >
            <FiLinkedin size={18} />
            LinkedIn
          </a>
        </li>

        <li>
          <a
            href="https://github.com/IgorCazeNunes/ReactDex"
            target="_blank"
            rel="Github - Igor Cazé Nunes"
          >
            <FiGithub size={18} />
            Github
          </a>
        </li>
      </NavList>
    </Content>
  </Container>
);

export default Header;
