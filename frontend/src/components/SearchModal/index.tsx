/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useEffect, useState } from 'react';
import { ErrorMessage, Field, Formik } from 'formik';
import { useHistory } from 'react-router-dom';

import { FiSearch, FiX, FiLoader } from 'react-icons/fi';

import api from '../../services/api';

import { Overlay, Container, SearchButton, SearchForm } from './styles';

interface PokemonRequest {
  id: string;
  name: string;
}

interface PokemonDataList {
  name: string;
  url: string;
}

const SearchModal: React.FC = () => {
  const history = useHistory();

  const [pokemonDataList, setPokemonDataList] = useState<PokemonDataList[]>([]);
  const [isSearchErrored, setIsSearchErrored] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const getPokemonDataList = useCallback(async () => {
    const { data } = await api.get('pokemon?limit=898&offset=0');

    const dataResults: PokemonDataList[] = data.results;

    setPokemonDataList(dataResults);
  }, []);

  useEffect(() => {
    getPokemonDataList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openSearchModal = useCallback(() => {
    setIsSearchModalOpen(true);
  }, []);

  const closeSearchModal = useCallback(() => {
    setIsSearchModalOpen(false);
  }, []);

  const validateSearch = useCallback(values => {
    let errors = {};

    if (!values.searchInput) {
      errors = { searchInput: 'Required' };
    }

    return errors;
  }, []);

  const handleSearch = useCallback(
    async (values, { setSubmitting }) => {
      try {
        setIsSearchErrored(false);

        const { data } = await api.get<PokemonRequest>(
          `pokemon/${values.searchInput.toLowerCase()}`,
        );

        history.push(`/details/${data.name}`);
      } catch (error) {
        setIsSearchErrored(true);
      }
    },
    [history],
  );

  return (
    <>
      <SearchButton type="button" onClick={openSearchModal}>
        <FiSearch size={18} />
      </SearchButton>

      {isSearchModalOpen && (
        <Overlay>
          <Container>
            <button type="button" onClick={closeSearchModal}>
              <FiX size={20} />
            </button>

            <strong>Search</strong>

            <Formik
              initialValues={{ searchInput: '' }}
              validate={validateSearch}
              onSubmit={handleSearch}
            >
              {({ handleSubmit, isSubmitting }) => (
                <SearchForm onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="searchInput">Pokémon Name:</label>

                    <div>
                      <Field
                        type="text"
                        id="searchInput"
                        name="searchInput"
                        list="data"
                        placeholder="Search by name or number..."
                      />

                      <datalist id="data">
                        {pokemonDataList.map(pokemon => (
                          <option
                            key={pokemon.name}
                            value={pokemon.name}
                            aria-label={`pokemon-${pokemon.name}`}
                          />
                        ))}
                      </datalist>

                      <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <FiLoader size={18} />
                        ) : (
                          <FiSearch size={18} />
                        )}
                      </button>
                    </div>
                  </div>

                  <ErrorMessage name="searchInput" component="span" />

                  {isSearchErrored && (
                    <span>Invalid pokemon name or number!</span>
                  )}
                </SearchForm>
              )}
            </Formik>
          </Container>
        </Overlay>
      )}
    </>
  );
};

export default SearchModal;
