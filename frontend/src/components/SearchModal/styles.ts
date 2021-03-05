import { FiLoader } from 'react-icons/fi';
import styled from 'styled-components';
import { darken } from 'polished';

import mediaBreak from '../../utils/mediaQueryBreakPoints';

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  right: 20px;
  bottom: 20px;

  width: 40px;
  height: 40px;

  background-color: #1266f1;
  border: none;
  border-radius: 40px;

  transition: all 0.4s;

  &:hover {
    background-color: ${darken(0.1, '#1266f1')};
  }

  svg {
    color: #ffffff;
  }
`;

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: rgba(222, 222, 222, 0.85);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 300px;

  position: relative;
  padding: 1rem;
  margin: 10px;

  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.5);

  @media (${mediaBreak.mdMin}) {
    max-width: 480px;
  }

  strong {
    color: #343a40;
    font-size: 1.75rem;
  }

  > button {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;

    font-size: 0;

    background: transparent;
    border: 0;

    svg {
      color: #343a40;
    }
  }

  body {
    padding-top: 75px;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 20px auto;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    div {
      display: flex;
      flex-direction: row;
      gap: 0;

      input {
        width: 100%;
        height: 45px;

        margin: 0 auto;
        padding: 0 10px;

        font-size: 1rem;
        border: 1px solid #d0cfce;
        outline: none;

        &:focus {
          border: 1px solid #008abf;
          transition: 0.35s ease;
          color: #008abf;

          &::-webkit-input-placeholder {
            transition: opacity 0.45s ease;
            opacity: 0;
          }

          &::-moz-placeholder {
            transition: opacity 0.45s ease;
            opacity: 0;
          }

          &:-ms-placeholder {
            transition: opacity 0.45s ease;
            opacity: 0;
          }
        }
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;

        min-width: 3rem;
        color: #fff;
        background-color: #1266f1;
        border: 0;

        transition: all 0.45s;

        &:hover {
          background-color: ${darken(0.1, '#1266f1')};
        }

        &:disabled {
          background-color: #292b2c;
        }

        svg {
          position: relative;
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }

  span {
    margin-top: 0.5rem;

    color: #e3350d;
  }
`;
