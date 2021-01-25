import styled from 'styled-components';
import { darken } from 'polished';

import { TypeBadgeProps } from './index';

import mediaBreak from '../../utils/mediaQueryBreakPoints';
import typesBackgroundVariation from '../../utils/typesBackgroundVariation';

export const Container = styled.span<TypeBadgeProps>`
  display: inline-block;
  padding: 0.35em 0.5em;

  background: ${props => typesBackgroundVariation[props.type]};
  border: 1.5px solid
    ${props => darken(0.4, typesBackgroundVariation[props.type])};

  color: #ffffff;
  font-size: 0.6rem;
  text-align: center;
  text-transform: uppercase;
  line-height: 1;
  white-space: nowrap;
  vertical-align: baseline;

  border-radius: 0.25rem;

  @media (${mediaBreak.mdMin}) {
    padding: 0.4em 0.6em;
    font-size: 0.8rem;
  }

  @media (${mediaBreak.lgMin}) {
    font-size: 0.9rem;
  }

  @media (${mediaBreak.xlMin}) {
    font-size: 1rem;
  }
`;
