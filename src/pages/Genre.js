import React, { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import movieApi from '../apis/movieApi';
import '../styles/color.css';
import '../styles/font.css';
import MovieCard from '../components/MovieCard';
import Tag from '../components/Tag';

export default function Genre() {
  const MainContainer = tw.div`
    w-[calc(100%-14rem)]
    ml-auto
    flex
    flex-wrap
  `;
  const SelectedTag = tw.div`
    text-3xl
    w-full
    mx-8
    mt-12
    font-extrabold
  `;

  const [movieData, setMovieData] = useState(null);
  const [tagList, setTag] = useState([]);

  useEffect(() => {
    movieApi
      .getPopular()
      .then(res => res.json())
      .then(json => {
        setMovieData(json);
      });
  }, [tagList]);
  return (
    <MainContainer>
      <Tag tagList={tagList} setTag={setTag} />
      <SelectedTag>
        {tagList.map(x => {
          return x.name;
        })}
      </SelectedTag>
      {movieData &&
        movieData.results.map(data => {
          return <MovieCard movieData={data} key={movieData.id} />;
        })}
    </MainContainer>
  );
}
