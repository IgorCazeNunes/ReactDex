import styled from 'styled-components';
import { darken } from 'polished';

const mqBreakPoints = {
  /** max-width: 767.98 */
  smMax: 'max-width: 767.98px',

  /** min-width: 768 */
  mdMin: 'min-width: 768px',

  /** max-width: 1023.98 */
  mdMax: 'max-width: 1023.98px',

  /** min-width: 1024 */
  lgMin: 'min-width: 1024px',

  /** min-width: 1279.98 */
  lgMax: 'max-width: 1279.98px',

  /** min-width: 1280 */
  xlMin: 'min-width: 1280px',
};

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

  @media (${mqBreakPoints.mdMin}) {
    margin: 20px 40px;
  }

  @media (${mqBreakPoints.xlMin}) {
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

export const PokemonItem = styled.li`
  display: flex;

  width: 48%;
  height: 140px;
  margin: 0 4% 20px 0;

  list-style: none;

  @media (${mqBreakPoints.smMax}) {
    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media (${mqBreakPoints.mdMin}) and (${mqBreakPoints.mdMax}) {
    width: 32%;
    margin-right: 2%;

    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  @media (${mqBreakPoints.lgMin}) {
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

    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0.5rem 1rem ${darken(0.35, '#ffffff')};

    text-decoration: none;
    font-size: 12px;
    color: #262626;

    transition: all 0.2s;

    @media (${mqBreakPoints.mdMin}) {
      &:hover {
        background: #def5f7;
        box-shadow: 0 0.5rem 1rem ${darken(0.5, '#ffffff')};
      }
    }

    @media (${mqBreakPoints.lgMin}) {
      font-size: 16px;
    }

    strong {
      font-weight: bold;
      font-size: 16px;

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
    max-width: 75px;

    li {
      flex: 1;
      justify-content: center;

      height: 25px;

      padding: 5px;
      margin-top: 3px;

      background: ${darken(0.35, '#ffffff')};

      color: #ffffff;
      text-align: center;
      font-weight: 500;

      border-radius: 5px;
      transition: background-color 0.2s;

      @media (${mqBreakPoints.lgMin}) {
        height: 30px;
        padding: 5px;
        margin-top: 3px;
      }
    }
  }

  img {
    width: auto;
    max-width: 75px;
    height: 100%;
    max-height: 75px;

    @media (min-width: 425px) {
      max-width: 95px;
      max-height: 95px;
    }

    @media (${mqBreakPoints.lgMin}) {
      max-width: 105px;
      max-height: 105px;
    }
  }
`;
