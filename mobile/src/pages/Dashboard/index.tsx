import React from 'react';
import { Text } from 'react-native';

import { Container, Content } from './styles';

const Dashboard: React.FC = () => (
    <Container>
        <Content>
            <Text
                style={{
                    fontSize: 40,
                    fontFamily: 'ChakraPetch-Medium',
                }}
            >
                Dashboard
            </Text>
        </Content>
    </Container>
);

export default Dashboard;
