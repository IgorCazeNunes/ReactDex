import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 10px;
  margin-bottom: 20px;

  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.35) !important;

  background: #e3350d;

  @media (min-width: 768px) {
    padding: 10px 40px;
  }
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;

  color: #ffffff;

  @media (min-width: 768px) {
    font-size: 30px;
  }

  img {
    margin: 0;

    @media (min-width: 768px) {
      margin-right: 5px;
    }
  }

  span {
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;

  margin: 0;
  padding: 0;

  list-style: none;

  li {
    & + li {
      margin-left: 20px;
    }

    a {
      color: #ffffff;
      text-decoration: none;

      @media (min-width: 768px) {
        color: ${lighten(0.4, '#e3350d')};

        transition: color 0.2s;

        &:hover {
          color: #ffffff;
        }
      }

      svg {
        margin: 0 5px 0 0;
      }
    }
  }
`;
