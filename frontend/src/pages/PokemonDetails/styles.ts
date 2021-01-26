import styled from 'styled-components';

import mediaBreak from '../../utils/mediaQueryBreakPoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;

  height: 100vh;
  max-width: 1360px;

  background: #ffffff;
  border-radius: 10px;

  padding: 20px;
  margin: 10px;

  @media (${mediaBreak.mdMin}) {
    margin: 20px 40px;
  }

  @media (${mediaBreak.xlMin}) {
    margin: 20px 80px;
  }
`;

export const ContainerHeader = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;

    position: absolute;

    color: #000000;
    text-decoration: none;

    transition: color 0.4s;

    &:hover {
      color: #000000;
    }

    @media (${mediaBreak.mdMin}) {
      font-size: 1.2rem;
      color: #666666;
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

  span {
    flex: 1;
    display: flex;
    justify-content: flex-end;

    font-size: 1.25rem;

    @media (${mediaBreak.mdMin}) {
      justify-content: center;

      font-size: 1.75rem;
    }

    @media (${mediaBreak.xlMin}) {
      font-size: 2.25rem;
    }
  }
`;

export const PokemonDescription = styled.section``;

export const PokemonStats = styled.section``;

export const PokemonStat = styled.li``;
