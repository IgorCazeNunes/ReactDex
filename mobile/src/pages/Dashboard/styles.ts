import styled from 'styled-components/native';

import { FlatList } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    align-items: center;
`;

export const PokemonList = styled(FlatList).attrs({
    numColumns: 1,
})`
    flex: 1;
`;

export const Loader = styled.ActivityIndicator`
    margin: 15px 0;
`;
