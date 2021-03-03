import styled from 'styled-components';

import { PokemonItemProps } from '../Dashboard/styles';

import LogoPokeball from '../../assets/pokeball.svg';

import mediaBreak from '../../utils/mediaQueryBreakPoints';
import typesBackgroundVariation from '../../utils/typesBackgroundVariation';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100vh;
`;

export const Content = styled.main<PokemonItemProps>`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;

  max-width: 1360px;

  background: ${props => typesBackgroundVariation[props.type]};
  border-radius: 10px;

  padding: 20px;
  margin: 10px;

  @media (${mediaBreak.mdMin}) {
    margin: 20px 40px;
  }

  @media (${mediaBreak.xlMin}) {
    margin: 20px 80px;
  }

  p,
  span {
    font-size: 1.1rem;
    text-align: justify;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 2;
    text-transform: capitalize;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    text-transform: capitalize;
  }
`;

export const ContainerHeader = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;

  a {
    display: flex;
    align-items: center;

    position: absolute;

    color: #ffffff;
    text-decoration: none;

    transition: color 0.4s;

    &:hover {
      color: #ffffff;
    }

    @media (${mediaBreak.mdMin}) {
      font-size: 1.2rem;
      color: #fbccc1;
    }

    svg {
      margin-right: 2px;

      @media (${mediaBreak.mdMin}) {
        margin-right: 4px;
      }

      @media (${mediaBreak.xlMin}) {
        width: 22px;
        height: 22px;
      }
    }

    span {
      font-size: 1rem;

      @media (${mediaBreak.mdMin}) {
        font-size: 1.2rem;
      }

      @media (${mediaBreak.xlMin}) {
        font-size: 1.75rem;
      }
    }
  }

  > span {
    flex: 1;
    display: flex;
    justify-content: flex-end;

    color: #ffffff;
    font-weight: bold;
    font-size: 1.4rem;
    text-transform: uppercase;

    @media (${mediaBreak.mdMin}) {
      justify-content: center;

      font-size: 1.75rem;
    }

    @media (${mediaBreak.xlMin}) {
      font-size: 2.25rem;
    }
  }
`;

export const PokemonDescription = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (${mediaBreak.mdMin}) {
    flex-direction: row;
  }

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;

    background: #ffffff;

    margin: 10px -20px;

    @media (${mediaBreak.mdMin}) {
      margin: 0;
      margin-left: 20px;

      background: transparent;
    }
  }
`;

export const PokemonAside = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: auto;

  @media (${mediaBreak.mdMin}) {
    max-width: 40%;
  }

  img {
    width: 100%;
    height: auto;

    background-image: url(${LogoPokeball});
    background-size: 95%;
    background-position: center;
    background-repeat: no-repeat;

    max-width: 365px;

    @media (${mediaBreak.mdMin}) {
    }

    @media (${mediaBreak.lgMin}) {
    }
  }

  ul {
    display: flex;
    align-items: center;
    flex-direction: row;

    list-style: none;

    li {
      margin: 3px;

      @media (${mediaBreak.lgMin}) {
        margin: 5px;
      }
    }
  }
`;

export const PokemonAbout = styled.article`
  flex: 1;
  display: flex;
  flex-direction: column;

  height: auto;

  padding: 20px;

  background: #ffffff;
  border-radius: 10px;

  @media (${mediaBreak.mdMin}) {
    padding: 20px 40px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    height: 100%;

    list-style: none;

    li {
      display: flex;
      flex-direction: row;

      width: 100%;
      height: auto;

      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }

      div {
        width: 50%;
        height: auto;

        margin: 0;
      }
    }
  }
`;

export const PokemonStats = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: auto;

  padding: 20px;

  background: #ffffff;
  border-radius: 10px;

  @media (${mediaBreak.mdMin}) {
    margin-top: 20px;
    padding: 20px 40px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    width: 100%;

    margin: 0;
    padding: 0;

    list-style: none;

    li {
      width: 100%;
      margin-bottom: 1rem;

      &:last-child {
        margin-bottom: 0;
      }

      @media (${mediaBreak.lgMin}) {
        width: 46%;
        margin: 0 4% 10px 0;

        &:nth-child(2n) {
          margin-right: 0;
        }

        &:last-child {
          margin-bottom: 1rem;
        }
      }
    }
  }
`;
