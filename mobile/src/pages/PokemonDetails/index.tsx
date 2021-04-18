import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import * as S from './styles';

const PokemonDetails: React.FC = () => {
    const navigation = useNavigation();

    const handleNavigateBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        <S.Container>
            <TouchableOpacity
                onPress={() => {
                    handleNavigateBack();
                }}
            >
                <Text
                    style={{
                        fontSize: 40,
                        fontFamily: 'ChakraPetch-Medium',
                    }}
                >
                    PokemonDetails
                </Text>
            </TouchableOpacity>
        </S.Container>
    );
};

export default PokemonDetails;
