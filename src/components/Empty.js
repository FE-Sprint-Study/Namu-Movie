import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import tw from 'tailwind-styled-components';

import { EMPTY_MESSAGE } from '../constants/constants';

export default function Empty() {
  const EmptyCardContainer = tw.div`
    text-white 
    px-8 my-8
    w-full 
    align-center
  `;
  const EmptyCard = tw.div`
    text-3xl 
    p-8 
    flex flex-col 
    items-center text-center 
    animate-blink
  `;
  const EmptyP = tw.div`
    mt-6
    cursor-default
  `;
  return (
    <EmptyCardContainer>
      <EmptyCard>
        <AiOutlineSearch size="50" />
        <EmptyP>
          {EMPTY_MESSAGE.MOVIE_NOT_FOUND}
          <br />
          {EMPTY_MESSAGE.SEARCH_AGAIN}
        </EmptyP>
      </EmptyCard>
    </EmptyCardContainer>
  );
}
