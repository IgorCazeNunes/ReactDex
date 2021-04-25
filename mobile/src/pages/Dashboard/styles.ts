import styled from 'styled-components/native';

import { FlatList } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    align-items: center;
`;

export const PokemonList = styled(FlatList).attrs({
    numColumns: 1,
})`
    display: flex;
    flex: 1;
    width: 100%;

    padding: 0 20px;
`;

export const Loader = styled.ActivityIndicator`
    margin: 15px 0;
`;
