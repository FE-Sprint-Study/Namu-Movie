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
