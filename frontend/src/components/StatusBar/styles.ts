import styled from 'styled-components';
import { lighten } from 'polished';

import statusBackgroundVariation from '../../utils/statusBackgroundVariation';

interface StatusData {
  statusName:
    | 'hp'
    | 'attack'
    | 'defense'
    | 'special_attack'
    | 'special_defense'
    | 'speed';
}

export const Container = styled.div<StatusData>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  > div {
    flex: 1;
    display: flex;
    align-items: center;

    width: 100%;
    height: 1.5rem;

    margin: 0;

    position: relative;
    border-radius: 4px;

    background: ${props =>
      lighten(0.25, statusBackgroundVariation[props.statusName])};

    div {
      height: 1.5rem;
      border-radius: 4px;
      background: ${props => statusBackgroundVariation[props.statusName]};
    }

    span {
      position: absolute;

      width: 100%;

      color: #000000;
      text-align: center;
      font-size: 1rem;
    }
  }
`;
