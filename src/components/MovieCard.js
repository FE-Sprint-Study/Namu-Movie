import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import '../styles/color.css';

export default function MovieCard({ movieData }) {
  const [isHover, setIsHover] = useState(false);

  const imgPath = movieData.poster_path;
  const overView = movieData.overview;
  const movieTitle = movieData.title;
  const date = movieData.release_date;
  const vote = movieData.vote_average;

  const sampleImg = `http://image.tmdb.org/t/p/w500/${imgPath}`;
  return (
    <Card>
      <div
        className={`h-5/6 relative cursor-pointer ease-in duration-300 ${
          isHover ? 'scale-105 ' : 'scale-100'
        } `}
        onMouseLeave={() => {
          setIsHover(false);
        }}
        onMouseEnter={() => {
          setIsHover(true);
        }}
      >
        <img
          className="absolute top-0 left-0 w-full h-full"
          src={sampleImg}
          alt="샘플포스터"
        />
        <div
          className={`absolute w-full h-full bottom-0 top-0 left-0 right-0 text-center  ${
            isHover ? 'flex' : 'hidden'
          } justify-center items-center bg-black/60`}
        >
          <div className="text-white p-4">{overView}</div>
        </div>
      </div>
      <div className="flex flex-col justify-between h-1/6 py-1 px-2 text-sm">
        <div className="text-white">{movieTitle}</div>
        <div className="text-xs flex flex-row justify-between">
          <div className="text-white">{date}</div>
          <div className="text-red-600">⭐️ {vote}</div>
        </div>
      </div>
    </Card>
  );
}

const Card = tw.div`
flex,
w-60
h-96
min-height: 150px;
shadow-2xl
overflow-hidden
bg-black
`;
