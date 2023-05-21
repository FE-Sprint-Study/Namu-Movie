import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';

import Swiper from '../components/Swiper';
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
      <div>
        <div className="flex justify-center items-center">
          {movieData && <Swiper movieData={movieData} />}
        </div>
        <div className="flex flex-col text-white m-8 ml-20 mr-20">
          <div className="text-5xl font-bold">최신 인기 영화</div>

          <div className="flex flex-row w-full overflow-x-scroll">
            {movieData &&
              movieData.results.map(data => {
                return <MovieCard movieData={data} key={movieData.id} />;
              })}
          </div>
          <div className="text-5xl font-bold">최신 인기 영화</div>

          <div className="flex flex-row w-full overflow-x-scroll">
            {movieData &&
              movieData.results.map(data => {
                return <MovieCard movieData={data} key={movieData.id} />;
              })}
          </div>
          <div className="text-5xl font-bold">최신 인기 영화</div>

          <div className="flex flex-row w-full overflow-x-scroll">
            {movieData &&
              movieData.results.map(data => {
                return <MovieCard movieData={data} key={movieData.id} />;
              })}
          </div>
          <div className="text-5xl font-bold">최신 인기 영화</div>

          <div className="flex flex-row w-full overflow-x-scroll">
            {movieData &&
              movieData.results.map(data => {
                return <MovieCard movieData={data} key={movieData.id} />;
              })}
          </div>
          <div className="text-5xl font-bold">최신 인기 영화</div>

          <div className="flex flex-row w-full overflow-x-scroll">
            {movieData &&
              movieData.results.map(data => {
                return <MovieCard movieData={data} key={movieData.id} />;
              })}
          </div>
        </div>
      </div>
    </MainContainer>
  );
}

const MainContainer = tw.div`
  w-[calc(100%-14rem)]
  ml-auto
  flex
  flex-col
  relative
  right-0
  overflow-scroll
  h-screen
`;
