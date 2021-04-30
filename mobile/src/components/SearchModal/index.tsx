import React, { useCallback, useEffect, useState } from 'react';
// import { ErrorMessage, Field, Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import * as S from './styles';

interface PokemonRequest {
    id: string;
    name: string;
}

interface PokemonDataList {
    name: string;
    url: string;
}

const SearchModal: React.FC = () => {
    const navigation = useNavigation();

    // const [pokemonDataList, setPokemonDataList] = useState<PokemonDataList[]>(
    //     [],
    // );
    const [isSearchErrored, setIsSearchErrored] = useState(false);
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

    // const getPokemonDataList = useCallback(async () => {
    //     const { data } = await api.get('pokemon?limit=898&offset=0');

    //     const dataResults: PokemonDataList[] = data.results;

    //     setPokemonDataList(dataResults);
    // }, []);

    // useEffect(() => {
    //     getPokemonDataList();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    const openSearchModal = useCallback(() => {
        setIsSearchModalOpen(true);
    }, []);

    const closeSearchModal = useCallback(() => {
        setIsSearchModalOpen(false);
    }, []);

    // const validateSearch = useCallback(values => {
    //     let errors = {};

    //     if (!values.searchInput) {
    //         errors = { searchInput: 'Required' };
    //     }

    //     return errors;
    // }, []);

    // const handleSearch = useCallback(async (values, { setSubmitting }) => {
    //     try {
    //         setIsSearchErrored(false);

    //         const { data } = await api.get<PokemonRequest>(
    //             `pokemon/${values.searchInput.toLowerCase()}`,
    //         );
    //     } catch (error) {
    //         setIsSearchErrored(true);
    //     }
    // }, []);

    return (
        <>
            {isSearchModalOpen ? (
                <S.Overlay>
                    <S.Container>
                        <S.ModalHeader>
                            <S.Title>Search</S.Title>

                            <S.CloseButton
                                onPress={() => {
                                    closeSearchModal();
                                }}
                            >
                                <S.CloseIcon name="x" />
                            </S.CloseButton>
                        </S.ModalHeader>

                        {/* <Formik
                            initialValues={{ searchInput: '' }}
                            validate={validateSearch}
                            onSubmit={handleSearch}
                        >
                            {({ handleSubmit, isSubmitting }) => ( */}
                        <S.InputContainer>
                            <S.InputLabel>Pokémon Name:</S.InputLabel>

                            <S.InputTextInput
                                keyboardAppearance="dark"
                                placeholderTextColor="#666360"
                                placeholder="Insert pokémon name..."
                            />
                        </S.InputContainer>

                        {isSearchErrored && (
                            <S.ErrorText>Invalid pokemon name!</S.ErrorText>
                        )}

                        <S.SubmitButton
                            onPress={() => {
                                console.log('Submit');
                            }}
                            // disabled={isSubmitting}
                        >
                            <S.SubmitButtonIcon name="search" />
                            <S.SubmitButtonText>Search</S.SubmitButtonText>
                        </S.SubmitButton>
                        {/* {isSubmitting ? (
                                            <FiLoader size={18} />
                                        ) : (
                                            <FiSearch size={18} />
                                        )} */}
                        {/* )}
                        </Formik>  */}
                    </S.Container>
                </S.Overlay>
            ) : (
                <S.SearchButton
                    onPress={() => {
                        openSearchModal();
                    }}
                >
                    <S.LinkIcon name="search" size={18} />
                </S.SearchButton>
            )}
        </>
    );
};

export default SearchModal;
