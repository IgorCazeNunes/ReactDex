import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  100% {
    transform: rotate(180deg);
  }
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  strong {
    font-weight: bold;
    font-size: 20px;
  }

  svg {
    margin: 0 5px;
    animation: ${spin} 1s infinite;
  }
`;
