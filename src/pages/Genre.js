import React, { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import movieApi from '../apis/movieApi';
import '../styles/color.css';
import '../styles/font.css';
import MovieCard from '../components/MovieCard';

export default function Genre() {
  const MainContainer = tw.div`
  w-[calc(100%-14rem)]
  ml-auto
  flex
  flex-wrap
`;
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
