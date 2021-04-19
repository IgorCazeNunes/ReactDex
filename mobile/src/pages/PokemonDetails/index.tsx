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
                    <TypeBadge type="fire" />
                    <TypeBadge type="dragon" />
                </S.BadgeContainer>
            </S.HeaderContainer>

            <S.MainContent>
                <S.SectionDetails>
                    <S.DetailsMainContainer>
                        <S.DetailsTitle>About</S.DetailsTitle>

                        <S.DetailsText>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellendus, id! Id animi, rerum nihil iure
                            soluta accusamus saepe sequi nobis suscipit commodi
                            fugiat tempore ut dolore illum vitae impedit quasi.
                        </S.DetailsText>
                    </S.DetailsMainContainer>

                    <S.DetailsSecondaryContainer>
                        <S.DetailsSecondaryContent>
                            <S.DetailsTitle>Height</S.DetailsTitle>

                            <S.DetailsText>1.7m</S.DetailsText>
                        </S.DetailsSecondaryContent>

                        <S.DetailsSecondaryContent>
                            <S.DetailsTitle>Weight</S.DetailsTitle>

                            <S.DetailsText>90.5KG</S.DetailsText>
                        </S.DetailsSecondaryContent>
                    </S.DetailsSecondaryContainer>

                    <S.DetailsSecondaryContainer>
                        <S.DetailsSecondaryContent>
                            <S.DetailsTitle>Habitat</S.DetailsTitle>

                            <S.DetailsText>Mountain</S.DetailsText>
                        </S.DetailsSecondaryContent>

                        <S.DetailsSecondaryContent>
                            <S.DetailsTitle>Egg Group</S.DetailsTitle>

                            <S.DetailsText>Monster Dragon</S.DetailsText>
                        </S.DetailsSecondaryContent>
                    </S.DetailsSecondaryContainer>
                </S.SectionDetails>
            </S.MainContent>
        </S.Container>
    );
};

export default PokemonDetails;
