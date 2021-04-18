import React, { useCallback } from 'react';
import { Linking } from 'react-native';

import LogoPokeball from '../../assets/Pokeball.png';

import {
    Container,
    TitleContainer,
    TitleLogo,
    LinksContainer,
    LinkTouchable,
    TitleText,
    LinkIcon,
} from './styles';

const Header: React.FC = () => {
    const handleNavigateToLinkedin = useCallback(async () => {
        Linking.openURL('https://www.linkedin.com/in/igorcazenunes/');
    }, []);

    const handleNavigateToGithub = useCallback(async () => {
        Linking.openURL('https://github.com/IgorCazeNunes/ReactDex');
    }, []);

    return (
        <Container>
            <TitleContainer>
                <TitleLogo source={LogoPokeball} />

                <TitleText>ReactDex</TitleText>
            </TitleContainer>

            <LinksContainer>
                <LinkTouchable
                    onPress={() => {
                        handleNavigateToLinkedin();
                    }}
                >
                    <LinkIcon name="linkedin" />
                </LinkTouchable>

                <LinkTouchable
                    onPress={() => {
                        handleNavigateToGithub();
                    }}
                >
                    <LinkIcon name="github" />
                </LinkTouchable>
            </LinksContainer>
        </Container>
    );
};

export default Header;
