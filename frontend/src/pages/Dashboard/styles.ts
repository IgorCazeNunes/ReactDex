import styled from 'styled-components';
import { darken } from 'polished';

import LogoPokeball from '../../assets/pokeball.svg';

import mediaBreak from '../../utils/mediaQueryBreakPoints';
import typesBackgroundVariation from '../../utils/typesBackgroundVariation';

export interface PokemonItemProps {
  type:
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
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
`;

export const Content = styled.main`
  display: flex;
  align-self: center;
  justify-content: center;

  height: auto;
  max-width: 1360px;

  margin: 10px;

  @media (${mediaBreak.mdMin}) {
    margin: 20px 40px;
  }

  @media (${mediaBreak.xlMin}) {
    margin: 20px 80px;
  }
`;

export const PokemonList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  width: 100%;

  margin: 0;
  padding: 0;

  list-style: none;
`;

export const PokemonItem = styled.li<PokemonItemProps>`
  display: flex;

  width: 48%;
  height: 140px;
  margin: 0 4% 20px 0;

  list-style: none;

  @media (${mediaBreak.smMax}) {
    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media (${mediaBreak.mdMin}) and (${mediaBreak.mdMax}) {
    width: 32%;
    margin-right: 2%;

    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  @media (${mediaBreak.lgMin}) {
    width: 23%;
    height: 160px;

    margin-right: 2.66%;

    &:nth-child(4n) {
      margin-right: 0;
    }
  }

  a {
    flex: 1;
    display: flex;
    flex-direction: column;

    padding: 10px;

    background-color: ${props => typesBackgroundVariation[props.type]};
    background-image: url(${LogoPokeball});
    background-size: 150px;
    background-position: 50% 70px;
    background-repeat: no-repeat;

    border-radius: 10px;
    box-shadow: 0 0.5rem 1rem ${darken(0.35, '#ffffff')};

    text-decoration: none;
    font-size: 12px;
    color: #ffffff;

    transition: all 0.5s;

    @media (${mediaBreak.mdMin}) {
      background-size: 170px;
      background-position: 50% 55px;

      &:hover {
        transform: scale(1.1);
      }
    }

    @media (${mediaBreak.lgMin}) {
      background-size: 170px;
      background-position: 50% 75px;

      font-size: 16px;
    }

    @media (${mediaBreak.xlMin}) {
      background-size: 220px;
      background-position: 50% 45px;
    }

    strong {
      font-size: 16px;
      font-weight: bold;
      text-transform: capitalize;

      margin-bottom: 4px;

      @media (min-width: 1024px) {
        font-size: 20px;
      }
    }
  }
`;

export const PokemonItemDescription = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  ul {
    list-style: none;
    width: 40%;

    li {
      margin-top: 3px;

      @media (${mediaBreak.lgMin}) {
        margin-top: 5px;
      }
    }
  }

  img {
    width: auto;
    max-width: 75px;
    height: 100%;
    max-height: 75px;

    @media (${mediaBreak.mdMin}) {
      max-width: 95px;
      max-height: 95px;
    }

    @media (${mediaBreak.lgMin}) {
      max-width: 105px;
      max-height: 105px;
    }
  }
`;
