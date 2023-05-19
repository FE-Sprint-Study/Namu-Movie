import React, { useEffect, useMemo, useRef, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useInView } from 'react-intersection-observer';

import tw from 'tailwind-styled-components';
import movieApi from '../apis/movieApi';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';
import RecommendResult from '../components/RecommendResult';

export default function Search() {
  const [searchWord, setSearchWord] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const searchInputRef = useRef('');

  const { ref, inView } = useInView({ threshold: 0.8 });

  const [page, setPage] = useState(1);

  const showSimilarItem = useMemo(() => {
    return similarMovies;
  }, [similarMovies]);

  const handleSearchSubmit = e => {
    e.preventDefault();
    setSearchWord(searchInputRef.current.value);
    setSimilarMovies([]);
    setPage(1);
    searchInputRef.current.value = '';
    searchInputRef.current.focus();
  };

  const fetchSearchMovieData = async word => {
    const searchData = await movieApi.getSearch(word);
    setSearchMovies([...searchData]);
    return [...searchData][0].genre_ids;
  };

  const fetchSimilarMovie = async (inputId, inputPage) => {
    const similarData = await movieApi.getSimilar(inputId, inputPage);
    setSimilarMovies(prevItem => [...prevItem, ...similarData]);
  };

  useEffect(() => {
    fetchSearchMovieData(searchWord).then(resId => {
      fetchSimilarMovie(resId, page);
    });
  }, [searchWord, page]);

  useEffect(() => {
    if (inView && searchWord) setPage(prev => prev + 1);
  }, [inView, searchWord]);

  return (
    <Container>
      <SearchBar
        handleSearchSubmit={handleSearchSubmit}
        searchInputRef={searchInputRef}
      />
      <SearchResult searchWord={searchWord} searchMovies={searchMovies} />
      <RecommendResult similarMovies={showSimilarItem.slice(0, page * 20)} />
      <ObserverContainer ref={ref} />
    </Container>
  );
}

const Container = tw.main`
  w-[calc(100%-14rem)]
  ml-auto
  flex
  flex-wrap
  flex-col
  items-center
  gap-y-12
`;

const ObserverContainer = tw.section`
  w-full
  h-20
`;
