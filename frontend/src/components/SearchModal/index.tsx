import React, { useCallback, useState } from 'react';

import { FiSearch, FiX } from 'react-icons/fi';

import { Overlay, Container, SearchButton, SearchForm } from './styles';

const SearchModal: React.FC = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(true);

  const openSearchModal = useCallback(() => {
    setIsSearchModalOpen(true);
  }, []);

  const closeSearchModal = useCallback(() => {
    setIsSearchModalOpen(false);
  }, []);

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

            <SearchForm>
              <input type="text" placeholder="Search by name or number..." />

              <button
                type="button"
                onClick={() => {
                  console.log('botão?');
                }}
              >
                <FiSearch size={18} />
              </button>
            </SearchForm>
          </Container>
        </Overlay>
      )}
    </>
  );
};

export default SearchModal;
