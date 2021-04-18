import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    width: 100%;

    padding: 10px 20px;
    margin-bottom: 20px;

    background: ${props => props.theme.background.vermillion};
`;

export const TitleContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const TitleLogo = styled.Image`
    width: 30px;
    height: 30px;

    margin-right: 5px;
`;

export const TitleText = styled.Text`
    height: 100%;

    color: ${props => props.theme.font.white};
    font-size: 26px;
    font-family: 'ChakraPetch-SemiBold';
`;

export const LinksContainer = styled.View`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 0;
    padding: 0;
`;

export const LinkTouchable = styled.TouchableOpacity`
    margin-left: 20px;
    width: auto;
    height: 100%;
`;

export const LinkIcon = styled(Icon)`
    color: ${props => props.theme.font.white};
    font-size: 26px;
`;
