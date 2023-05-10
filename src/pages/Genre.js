import React, { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import movieApi from '../apis/movieApi';
import '../styles/color.css';
import '../styles/font.css';

export default function Genre() {
  const Container = tw.div`
    w-56
    h-screen
    pr-1
    bg-black
    fixed
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
  return <Container />;
}
