import React, { useCallback, useState } from 'react';
import { ErrorMessage, Field, Formik } from 'formik';
import { useHistory } from 'react-router-dom';

import { FiSearch, FiX, FiLoader } from 'react-icons/fi';

import api from '../../services/api';

import { Overlay, Container, SearchButton, SearchForm } from './styles';

interface PokemonRequest {
  id: string;
  name: string;
}

const SearchModal: React.FC = () => {
  const history = useHistory();

  const [isSearchErrored, setIsSearchErrored] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

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
                    <Field
                      type="text"
                      name="searchInput"
                      placeholder="Search by name or number..."
                    />

                    <button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <FiLoader size={18} />
                      ) : (
                        <FiSearch size={18} />
                      )}
                    </button>
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
