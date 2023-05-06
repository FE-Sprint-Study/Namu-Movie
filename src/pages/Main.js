import React, { useEffect, useState } from 'react';

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
    <div className="flex">
      {movieData &&
        movieData.results.map(data => {
          return <MovieCard movieData={data} />;
        })}
    </div>
  );
}
