import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.ScrollView`
    flex: 1;

    width: 100%;
    height: 100%;

    padding-top: 20px;
`;

export const ReturnButton = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    position: absolute;
    z-index: 999;

    top: 0px;
    left: 20px;

    height: 50px;
    width: auto;
`;

export const ReturnButtonIcon = styled(Icon)`
    margin-right: 5px;
    color: ${props => props.theme.font.dark};
    font-size: 26px;
`;

export const ReturnButtonText = styled.Text`
    color: ${props => props.theme.font.dark};
    font-size: 22px;
    font-family: 'ChakraPetch-SemiBold';
`;

export const HeaderContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PokemonImage = styled.Image`
    margin: 20px;
    margin-bottom: 0;

    width: 275px;
    height: 275px;
`;

export const BadgeContainer = styled.View`
    display: flex;
    flex-direction: row;
`;

export const MainContent = styled.View`
    flex: 1;
    display: flex;
    flex-direction: column;

    margin-top: 20px;

    background: ${props => props.theme.background.white};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

export const DetailsSection = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 20px;
`;

export const DetailsTitle = styled.Text`
    color: ${props => props.theme.font.dark};
    font-size: 20px;
    font-family: 'ChakraPetch-SemiBold';
`;

export const DetailsSubTitle = styled.Text`
    color: ${props => props.theme.font.dark};
    font-size: 18px;
    text-transform: capitalize;
    font-family: 'ChakraPetch-Medium';
`;

export const DetailsText = styled.Text`
    color: ${props => props.theme.font.dark};
    font-size: 16px;
    text-align: justify;
    font-family: 'ChakraPetch-Regular';
`;

export const DetailsMainContainer = styled.View`
    display: flex;
`;

export const DetailsSecondaryContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-top: 20px;
`;

export const DetailsSecondaryContent = styled.View`
    width: 47.5%;
`;

export const StatusSection = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 20px;
    padding-top: 0;

    margin-bottom: 20px;
`;

export const StatusTitle = styled.Text`
    color: ${props => props.theme.font.dark};
    font-size: 20px;
    font-family: 'ChakraPetch-SemiBold';
`;

export const StatusList = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const StatusContainer = styled.View`
    margin-bottom: 10px;
    width: 45%;
    margin-right: 5%;
`;

export const StatusSubTitle = styled.Text`
    color: ${props => props.theme.font.dark};
    font-size: 18px;
    text-transform: capitalize;
    font-family: 'ChakraPetch-Medium';
`;
