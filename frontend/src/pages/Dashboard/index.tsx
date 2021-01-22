import React from 'react';

import Header from '../../components/Navbar';

import { Container } from './styles';

const Dashboard: React.FC = () => (
  <>
    <Header />

    <Container>
      <h1>DashBoard</h1>
    </Container>
  </>
);

export default Dashboard;
