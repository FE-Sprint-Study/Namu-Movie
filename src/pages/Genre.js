import React, { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import movieApi from '../apis/movieApi';
import '../styles/color.css';
import '../styles/font.css';
import MovieCard from '../components/MovieCard';
import Tag from '../components/Tag';

export default function Genre() {
  const MainContainer = tw.div`
    w-[calc(100%-14rem)]
    ml-auto
    flex flex-col
  `;
  const SelectedTag = tw.div`
    text-3xl text-white
    font-extrabold 
    w-full
    px-8 mt-12
  `;
  const CardContainer = tw.div`
    flex flex-wrap
  `;
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

  const [movieData, setMovieData] = useState(null);
  const [tagList, setTag] = useState([]);

  useEffect(() => {
    const genreParameter = tagList.map((item, idx) => {
      if (idx === 0) return item.id;
      return `, ${item.id}`;
    });

    movieApi
      .getGenreMovie(genreParameter)
      .then(res => res.json())
      .then(json => {
        setMovieData(json);
      });
  }, [tagList]);
  return (
    <MainContainer>
      <Tag tagList={tagList} setTag={setTag} />
      <SelectedTag>
        {tagList.length === 0
          ? '전체보기'
          : tagList.map((item, idx) => {
              if (idx === 0) return item.name;
              return `, ${item.name}`;
            })}
      </SelectedTag>
      <CardContainer>
        {movieData && movieData.total_results !== 0 ? (
          movieData.results.map(data => {
            return <MovieCard movieData={data} key={movieData.id} />;
          })
        ) : (
          <EmptyCardContainer>
            <EmptyCard>
              <AiOutlineSearch size="50" />
              <p className="mt-6">
                movie not found <br />
                search again
              </p>
            </EmptyCard>
          </EmptyCardContainer>
        )}
      </CardContainer>
    </MainContainer>
  );
}
