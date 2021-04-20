import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import TypeBadge from '../../components/TypeBadge';
import StatusBar from '../../components/StatusBar';

import charizardImage from '../../assets/charizard.png';

import * as S from './styles';

interface IFakeStatus {
    name:
        | 'hp'
        | 'attack'
        | 'defense'
        | 'special-attack'
        | 'special-defense'
        | 'speed';
    value: number;
}

const PokemonDetails: React.FC = () => {
    const navigation = useNavigation();

    const [fakeStatusList, setFakeStatusList] = useState<IFakeStatus[]>([]);

    useEffect(() => {
        setFakeStatusList([
            {
                name: 'hp',
                value: 255,
            },
            {
                name: 'speed',
                value: 10,
            },
            {
                name: 'attack',
                value: 50,
            },
            {
                name: 'special-attack',
                value: 80,
            },
            {
                name: 'defense',
                value: 125,
            },
            {
                name: 'special-defense',
                value: 212,
            },
        ]);
    }, []);

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

                <S.StatusSection>
                    <S.StatusTitle>Status</S.StatusTitle>

                    <S.StatusList>
                        {fakeStatusList &&
                            fakeStatusList.map(status => (
                                <S.StatusContainer key={status.name}>
                                    <S.StatusSubTitle>
                                        {status.name}
                                    </S.StatusSubTitle>

                                    <StatusBar
                                        name={status.name}
                                        baseStat={status.value}
                                    />
                                </S.StatusContainer>
                            ))}
                    </S.StatusList>
                </S.StatusSection>
            </S.MainContent>
        </S.Container>
    );
};

export default PokemonDetails;
