import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Text } from 'react-native';

import * as S from './styles';

const PokemonDetails: React.FC = () => {
    const navigation = useNavigation();

    const handleNavigateBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        <S.Container>
            <S.ReturnButton
                onPress={() => {
                    handleNavigateBack();
                }}
            >
                <S.ReturnButtonIcon name="chevron-left" />

                <S.ReturnButtonText>Back</S.ReturnButtonText>
            </S.ReturnButton>

            <Text>PokemonDetails</Text>
        </S.Container>
    );
};

export default PokemonDetails;
