/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { FiLoader } from 'react-icons/fi';

import { Container } from './styles';

const Loader: React.FC = () => (
  <Container>
    <FiLoader size={18} />
    <strong>Loading ...</strong>
  </Container>
);

export default Loader;
