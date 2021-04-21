import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import formatNumber from '../../utils/formatIdToString';

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

    const formatedNumber = useMemo(() => {
        return formatNumber(3);
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
                <S.ContentTitle>{`${formatedNumber} - Charizard`}</S.ContentTitle>

                <S.DetailsSection>
                    <S.DetailsMainContainer>
                        <S.SectionTitle>About</S.SectionTitle>

                        <S.MainContentText>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellendus, id! Id animi, rerum nihil iure
                            soluta accusamus saepe sequi nobis suscipit commodi
                            fugiat tempore ut dolore illum vitae impedit quasi.
                        </S.MainContentText>
                    </S.DetailsMainContainer>

                    <S.DetailsSecondaryContainer>
                        <S.DetailsSecondaryContent>
                            <S.SectionSubTitle>Height</S.SectionSubTitle>

                            <S.MainContentText>1.7m</S.MainContentText>
                        </S.DetailsSecondaryContent>

                        <S.DetailsSecondaryContent>
                            <S.SectionSubTitle>Weight</S.SectionSubTitle>

                            <S.MainContentText>90.5KG</S.MainContentText>
                        </S.DetailsSecondaryContent>
                    </S.DetailsSecondaryContainer>

                    <S.DetailsSecondaryContainer>
                        <S.DetailsSecondaryContent>
                            <S.SectionSubTitle>Habitat</S.SectionSubTitle>

                            <S.MainContentText>Mountain</S.MainContentText>
                        </S.DetailsSecondaryContent>

                        <S.DetailsSecondaryContent>
                            <S.SectionSubTitle>Egg Group</S.SectionSubTitle>

                            <S.MainContentText>
                                Monster Dragon
                            </S.MainContentText>
                        </S.DetailsSecondaryContent>
                    </S.DetailsSecondaryContainer>
                </S.DetailsSection>

                <S.StatusSection>
                    <S.SectionTitle>Status</S.SectionTitle>

                    <S.StatusList>
                        {fakeStatusList &&
                            fakeStatusList.map(status => (
                                <S.StatusContainer key={status.name}>
                                    <S.SectionSubTitle>
                                        {status.name}
                                    </S.SectionSubTitle>

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
