import 'react-native-gesture-handler';

import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { DefaultTheme, ThemeProvider } from 'styled-components';

import theme from './styles/themes/main';

import Routes from './routes';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <StatusBar barStyle="light-content" backgroundColor="#e3350d" />

                <Routes />
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default App;
