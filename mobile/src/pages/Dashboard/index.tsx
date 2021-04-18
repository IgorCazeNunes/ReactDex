import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import * as S from './styles';

const Dashboard: React.FC = () => {
    const navigation = useNavigation();

    const handleNavigateToDetails = useCallback(() => {
        navigation.navigate('PokemonDetails');
    }, [navigation]);

    return (
        <S.Container>
            <TouchableOpacity
                onPress={() => {
                    handleNavigateToDetails();
                }}
            >
                <Text
                    style={{
                        fontSize: 40,
                        fontFamily: 'ChakraPetch-Medium',
                    }}
                >
                    Dashboard
                </Text>
            </TouchableOpacity>
        </S.Container>
    );
};

export default Dashboard;
