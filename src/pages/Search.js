import { useEffect, useRef, useState } from 'react';
const API_KEY = 'b15312a073368028871202b6543ee610';
// 해야할 것: 추천 영화가 하나씩 밀려서 나오는 현상
export default function Search() {
  const [searchWord, setSearchWord] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [genreIds, setGenreIds] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const searchInputRef = useRef('');

  const handleSearchSubmit = e => {
    e.preventDefault();
    setSearchWord(searchInputRef.current.value);
    searchInputRef.current.value = '';
    searchInputRef.current.focus();
  };

  const fetchSearchMovieData = async word => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${word}&include_adult=true&language=ko-KR`,
    );
    response.json().then(res => {
      setSearchMovies([...res.results]);
      setGenreIds([...res.results][0].genre_ids);
    });
    return;
  };

  const fetchSimilarMovie = async genreIds => {
    const genreIdsStr = genreIds.join(',');
    const url = searchMovies.length
      ? `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=ko-KR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreIdsStr}&with_watch_monetization_types=free`
      : '';
    const response = await fetch(url);
    response.json().then(res => {
      console.log('similar: ', res.results);
      setSimilarMovies([...res.results]);
    });
    return;
  };

  useEffect(() => {
    fetchSearchMovieData(searchWord);
    fetchSimilarMovie([...genreIds]);
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
        <label htmlFor="">{searchWord}로 검색한 결과입니다.</label>
        <div className="search--result--movie">
          {searchMovies.map(movie => {
            return <div key={movie.id}>{movie.title}</div>;
          })}
        </div>
      </div>
      <br />
      <br />
      <div className="search--recommend">
        <label htmlFor="">이런 영화는 어떠신가요?</label>
        <div className="search--recommend--movie">
          {similarMovies.map(movie => {
            return <div key={movie.id}>{movie.title}</div>;
          })}
        </div>
      </div>
    </>
  );
}
