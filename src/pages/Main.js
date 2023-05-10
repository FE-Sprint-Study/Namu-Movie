import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';

import MovieCard from '../components/MovieCard';
import movieApi from '../apis/movieApi';

export default function Main() {
  const [movieData, setMovieData] = useState(null);
  useEffect(() => {
    movieApi
      .getPopular()
      .then(res => res.json())
      .then(json => {
        setMovieData(json);
      });
  }, []);

  return (
    <MainContainer>
      {movieData &&
        movieData.results.map(data => {
          return <MovieCard movieData={data} key={movieData.id} />;
        })}
    </MainContainer>
  );
}

const MainContainer = tw.div`
  w-5/6
  ml-auto
  flex
  flex-wrap
`;
