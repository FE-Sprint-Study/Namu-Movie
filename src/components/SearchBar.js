import React from 'react';
import tw from 'tailwind-styled-components';

export default function SearchBar({ searchInputRef, handleSearchSubmit }) {
  return (
    <form action="" onSubmit={handleSearchSubmit}>
      <SearchBox>
        <SearchInput ref={searchInputRef} placeholder="검색어를 입력해주세요" />
        <button type="submit">🔍</button>
      </SearchBox>
    </form>
  );
}

const SearchBox = tw.div`
  w-searchBarWidth
  p-2
  mt-2
  mb-2
  rounded-full
  flex
  justify-between
  shadow-inner
  bg-white
`;

const SearchInput = tw.input`
  outline-none
  w-searchBarWidth
  &:placeholder {
    ml-3
  }
`;
