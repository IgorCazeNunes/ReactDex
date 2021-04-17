import React from 'react';
import { View, Text } from 'react-native';

const App: React.FC = () => (
    <View
        style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <Text
            style={{
                fontSize: 40,
                color: '#ffffff',
            }}
        >
            ReactDex
        </Text>
    </View>
);

export default App;
