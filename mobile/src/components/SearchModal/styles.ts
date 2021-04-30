import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Feather';

export const SearchButton = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 20px;
    bottom: 20px;

    width: 50px;
    height: 50px;

    background-color: ${props => props.theme.background.vermillion};
    border: none;
    border-radius: 50px;

    elevation: 3;

    z-index: 3;
`;

export const LinkIcon = styled(Icon)`
    color: ${props => props.theme.font.white};
    font-size: 26px;
`;

export const Overlay = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 20px;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background: rgba(22, 22, 22, 0.85);
`;

export const Container = styled.View`
    position: absolute;

    width: 100%;

    padding: 20px;

    background: ${props => props.theme.font.white};
    border-radius: 5px;

    elevation: 5;
`;

export const ModalHeader = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    margin-bottom: 5px;
`;

export const Title = styled.Text`
    color: ${props => props.theme.font.dark};
    font-family: 'ChakraPetch-SemiBold';
    font-size: 20px;
`;

export const CloseButton = styled.TouchableOpacity``;

export const CloseIcon = styled(Icon)`
    color: ${props => props.theme.font.dark};
    font-size: 24px;
`;

export const InputContainer = styled.View`
    display: flex;
    flex-direction: column;

    margin-bottom: 10px;
`;

export const InputLabel = styled.Text`
    color: ${props => props.theme.font.dark};
    font-family: 'ChakraPetch-Medium';
    font-size: 18px;
`;

export const InputTextInput = styled.TextInput`
    width: 100%;
    height: 45px;

    margin: 0 auto;
    padding: 0 10px;

    color: ${props => props.theme.font.dark};
    font-size: 16px;

    border: 1px solid #d0cfce;
    border-radius: 5px;
`;

export const ErrorText = styled.Text`
    margin-bottom: 10px;

    color: ${props => props.theme.font.vermillion};
    font-family: 'ChakraPetch-Medium';
    font-size: 16px;
`;

export const SubmitButton = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 100%;

    margin-top: 10px;

    background-color: ${props => props.theme.background.vermillion};

    ${props =>
        props.disabled &&
        `background-color: ${props.theme.background.disabled};`}

    border-radius: 5px;
    elevation: 3;
`;

export const SubmitButtonText = styled.Text`
    color: ${props => props.theme.font.white};
    font-family: 'ChakraPetch-Medium';
    font-size: 18px;
`;

export const SubmitButtonIcon = styled(Icon)`
    margin-bottom: 2px;
    margin-right: 5px;

    color: ${props => props.theme.font.white};
    font-size: 20px;
`;
