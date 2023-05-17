import React, { useEffect, useRef, useState } from 'react';
import movieApi from '../apis/movieApi';

const API_KEY = 'b15312a073368028871202b6543ee610';

export default function Search() {
  const [searchWord, setSearchWord] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const searchInputRef = useRef('');

  const handleSearchSubmit = e => {
    e.preventDefault();
    setSearchWord(searchInputRef.current.value);
    searchInputRef.current.value = '';
    searchInputRef.current.focus();
  };

  const fetchSearchMovieData = async word => {
    const searchData = await movieApi.getSearch(word);
    setSearchMovies([...searchData]);
    return [...searchData][0].genre_ids;
  };

  const fetchSimilarMovie = async id => {
    const similarData = await movieApi.getSimilar(id);
    setSimilarMovies([...similarData]);
  };

  useEffect(() => {
    fetchSearchMovieData(searchWord).then(resId => {
      fetchSimilarMovie(resId);
    });
  }, [searchWord]);

  return (
    <>
      <form action="" onSubmit={handleSearchSubmit}>
        <span style={{ border: '2px solid black', padding: '6px' }}>
          <input ref={searchInputRef} placeholder="Search" />
          <button type="submit">🔍</button>
        </span>
      </form>

      {/* 검색한 결과가 없다면 검색한 결과가 없다고 알려주고 div를 아예 안보여주기 */}
      <div className="search--result">
        <div>{searchWord}로 검색한 결과입니다.</div>
        <div className="search--result--movie">
          {searchMovies.map(movie => {
            return <div key={movie.id}>{movie.title}</div>;
          })}
        </div>
      </div>
      <br />
      <br />
      <div className="search--recommend">
        <div>이런 영화는 어떠신가요?</div>
        <div className="search--recommend--movie">
          {similarMovies.map(movie => {
            return <div key={movie.id}>{movie.title}</div>;
          })}
        </div>
      </div>
    </>
  );
}
