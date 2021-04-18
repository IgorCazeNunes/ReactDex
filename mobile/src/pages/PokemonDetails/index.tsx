import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Text } from 'react-native';

import charizardImage from '../../assets/charizard.png';

import * as S from './styles';
import TypeBadge from '../../components/TypeBadge';

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

            <S.HeaderContainer>
                <S.PokemonImage source={charizardImage} />

                <S.BadgeContainer>
                    <TypeBadge type="dragon" />
                    <TypeBadge type="flying" />
                    <TypeBadge type="fire" />
                </S.BadgeContainer>
            </S.HeaderContainer>

            <Text>PokemonDetails</Text>
            <Text>PokemonDetails</Text>
            <Text>PokemonDetails</Text>
            <Text>PokemonDetails</Text>
        </S.Container>
    );
};

export default PokemonDetails;
