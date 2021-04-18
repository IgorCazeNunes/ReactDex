import React, { useCallback } from 'react';
import { Linking } from 'react-native';

import LogoPokeball from '../../assets/Pokeball.png';

import * as S from './styles';

const Header: React.FC = () => {
    const handleNavigateToLinkedin = useCallback(async () => {
        Linking.openURL('https://www.linkedin.com/in/igorcazenunes/');
    }, []);

    const handleNavigateToGithub = useCallback(async () => {
        Linking.openURL('https://github.com/IgorCazeNunes/ReactDex');
    }, []);

    return (
        <S.Container>
            <S.TitleContainer>
                <S.TitleLogo source={LogoPokeball} />

                <S.TitleText>ReactDex</S.TitleText>
            </S.TitleContainer>

            <S.LinksContainer>
                <S.LinkTouchable
                    onPress={() => {
                        handleNavigateToLinkedin();
                    }}
                >
                    <S.LinkIcon name="linkedin" />
                </S.LinkTouchable>

                <S.LinkTouchable
                    onPress={() => {
                        handleNavigateToGithub();
                    }}
                >
                    <S.LinkIcon name="github" />
                </S.LinkTouchable>
            </S.LinksContainer>
        </S.Container>
    );
};

export default Header;
