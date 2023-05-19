import React from 'react';

import tw from 'tailwind-styled-components';
import MovieCard from './MovieCard';

export default function RecommendResult({ similarMovies }) {
  return (
    <ResultContainer>
      {similarMovies.length && <Label>이런 영화는 어떠신가요?</Label>}
      <MovieContainer>
        {similarMovies.map(movie => {
          return <MovieCard key={movie.id} movieData={movie} />;
        })}
      </MovieContainer>
    </ResultContainer>
  );
}

// 이렇게 하면 반응형으로 해야 이쁘게 나올듯함
const ResultContainer = tw.section`
  w-searchResultContainer 
`;

const Label = tw.label`
    text-3xl
    w-full
    mx-8
    font-extrabold
    text-white
`;

const MovieContainer = tw.div`
  flex
  flex-wrap
`;
