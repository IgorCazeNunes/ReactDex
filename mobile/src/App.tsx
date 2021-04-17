import React from 'react';
import { View, Text, StatusBar } from 'react-native';

const App: React.FC = () => {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#e3350d" />

            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#e2e2e2',
                }}
            >
                <Text
                    style={{
                        fontSize: 40,
                        color: '#e3350d',
                    }}
                >
                    ReactDex
                </Text>
            </View>
        </>
    );
};

export default App;
