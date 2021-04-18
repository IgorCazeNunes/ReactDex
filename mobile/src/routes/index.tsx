import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';

import Dashboard from '../pages/Dashboard';
import PokemonDetails from '../pages/PokemonDetails';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
    <App.Navigator
        screenOptions={{
            header: () => <Header />,
            cardStyle: { backgroundColor: '#e2e2e2' },
        }}
    >
        <App.Screen name="Dashboard" component={Dashboard} />
        <App.Screen name="PokemonDetails" component={PokemonDetails} />
    </App.Navigator>
);

export default AppRoutes;
