import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import tw from 'tailwind-styled-components';
import movieApi from '../apis/movieApi';
import MovieCard from '../components/MovieCard';
import Tag from '../components/Tag';
import Empty from '../components/Empty';
import { VARIOUS_NUMBERS, GENRE_TITLE } from '../constants/constants';
import '../styles/color.css';
import '../styles/font.css';

export default function Genre() {
  const SelectedTag = tw.div`
    text-3xl text-white
    font-extrabold 
    w-full
    px-8 mt-12
  `;
  const CardContainer = tw.div`
    flex flex-wrap
  `;

  const [movieData, setMovieData] = useState([]);
  const [tagList, setTag] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const { ref, inView } = useInView({ threshold: 1 });

  const genreParameter =
    tagList.length > 0 ? tagList.map(item => item.id).join(',') : null;

  const getMovieData = async (resetPage = true) => {
    const nextPage = resetPage ? 1 : page + 1;

    const response = await movieApi.getGenreMovie(genreParameter, nextPage);
    const json = await response.json();

    if (resetPage) setMovieData(json.results);
    else setMovieData(prevData => [...prevData, ...json.results]);
    setTotalPage(json.total_pages);
    setPage(nextPage);
  };

  useEffect(() => {
    getMovieData(true);
  }, [tagList]);

  useEffect(() => {
    if (inView && totalPage > page) {
      getMovieData(false);
    }
  }, [inView]);

  return (
    <div className=" w-[calc(100%-14rem)] ml-auto flex flex-col">
      <Tag tagList={tagList} setTag={setTag} />
      <SelectedTag>
        {tagList.length === 0
          ? GENRE_TITLE.VIEW_ALL
          : tagList.map((item, idx) => {
              if (idx === 0) return item.name;
              return `, ${item.name}`;
            })}
      </SelectedTag>
      <CardContainer>
        {movieData && movieData.length !== 0 ? (
          movieData.map((data, idx) => {
            if (
              page * VARIOUS_NUMBERS.PAGE_AMOUNT -
                VARIOUS_NUMBERS.PAGE_AMOUNT <=
              idx
            )
              return <MovieCard movieData={data} key={movieData.id} isNew />;
            return <MovieCard movieData={data} key={movieData.id} />;
          })
        ) : (
          <Empty />
        )}
      </CardContainer>
      <div ref={ref} style={{ width: '100%', height: '20px' }} />
    </div>
  );
}
