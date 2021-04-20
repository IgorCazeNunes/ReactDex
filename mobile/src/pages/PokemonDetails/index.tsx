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
                <S.DetailsSection>
                    <S.DetailsMainContainer>
                        <S.MainContentTitle>About</S.MainContentTitle>

                        <S.MainContentText>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellendus, id! Id animi, rerum nihil iure
                            soluta accusamus saepe sequi nobis suscipit commodi
                            fugiat tempore ut dolore illum vitae impedit quasi.
                        </S.MainContentText>
                    </S.DetailsMainContainer>

                    <S.DetailsSecondaryContainer>
                        <S.DetailsSecondaryContent>
                            <S.MainContentSubTitle>
                                Height
                            </S.MainContentSubTitle>

                            <S.MainContentText>1.7m</S.MainContentText>
                        </S.DetailsSecondaryContent>

                        <S.DetailsSecondaryContent>
                            <S.MainContentSubTitle>
                                Weight
                            </S.MainContentSubTitle>

                            <S.MainContentText>90.5KG</S.MainContentText>
                        </S.DetailsSecondaryContent>
                    </S.DetailsSecondaryContainer>

                    <S.DetailsSecondaryContainer>
                        <S.DetailsSecondaryContent>
                            <S.MainContentSubTitle>
                                Habitat
                            </S.MainContentSubTitle>

                            <S.MainContentText>Mountain</S.MainContentText>
                        </S.DetailsSecondaryContent>

                        <S.DetailsSecondaryContent>
                            <S.MainContentSubTitle>
                                Egg Group
                            </S.MainContentSubTitle>

                            <S.MainContentText>
                                Monster Dragon
                            </S.MainContentText>
                        </S.DetailsSecondaryContent>
                    </S.DetailsSecondaryContainer>
                </S.DetailsSection>

                <S.StatusSection>
                    <S.MainContentTitle>Status</S.MainContentTitle>

                    <S.StatusList>
                        {fakeStatusList &&
                            fakeStatusList.map(status => (
                                <S.StatusContainer key={status.name}>
                                    <S.MainContentSubTitle>
                                        {status.name}
                                    </S.MainContentSubTitle>

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
