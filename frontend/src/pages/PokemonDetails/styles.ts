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

export const ContainerHeader = styled.h1``;

export const PokemonDescription = styled.section``;

export const PokemonStats = styled.section``;

export const PokemonStat = styled.li``;
