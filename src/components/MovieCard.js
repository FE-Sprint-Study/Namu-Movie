/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import tw from 'tailwind-styled-components';

import '../styles/color.css';

import { AiFillStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { modalActions } from '../store/modalSlice';
import Skeleton from './Skeleton';

import { MOVIECARD_MESSAGE, VARIOUS_NUMBERS } from '../constants/constants';

export default function MovieCard({ movieData, isNew }) {
  const [isHover, setIsHover] = useState(false);
  const dispatch = useDispatch();

  const imgPath = movieData.poster_path;
  const overView = movieData.overview.slice(0, 40);
  const movieTitle = movieData.title;
  const date = movieData.release_date;
  const vote = movieData.vote_average.toFixed(1);
  const posterImg = `http://image.tmdb.org/t/p/w500/${imgPath}`;

  const notFoundImg =
    'https://skydomepictures.com/wp-content/uploads/2018/08/movie-poster-coming-soon-2.png';

  const [isImgLoaded, setIsImgLoaded] = useState(false);

  setTimeout(() => {
    setIsImgLoaded(true);
  }, VARIOUS_NUMBERS.TIMEOUT_LIMIT);

  return (
    <Card>
      {!isNew || isImgLoaded ? (
        <>
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
            onClick={() => dispatch(modalActions.update(movieData))}
          >
            <img
              className="absolute top-0 left-0 w-full h-full"
              src={imgPath ? posterImg : notFoundImg}
              alt={MOVIECARD_MESSAGE.ALT_POSTER}
            />
            <HoverCard className={` ${isHover ? 'flex' : 'hidden'} `}>
              <div className="text-white p-4">
                {overView !== ''
                  ? `${overView}...`
                  : MOVIECARD_MESSAGE.NO_OVERVIEW}
              </div>
            </HoverCard>
          </div>
          <InfoContainer className={` ${isHover ? `border-mainColor` : ''}`}>
            <div className="text-white">{movieTitle}</div>
            <div className="text-xs flex flex-row justify-between">
              <div className="text-white">{date}</div>
              <div className="text-red-600 flex">
                <AiFillStar className="text-base" /> {vote}
              </div>
            </div>
          </InfoContainer>
        </>
      ) : (
        <Skeleton />
      )}
    </Card>
  );
}

const Card = tw.div`
flex,
w-60
h-96
min-height: 150px;
min-w-60
overflow-hidden
bg-black
m-8
font-bold
`;

const HoverCard = tw.div`
absolute  
w-full 
h-full 
bottom-0 top-0 left-0 right-0 
text-center text-ellipsis 
overflow-hidden
justify-center items-center 
bg-black/60
`;

const InfoContainer = tw.div`
flex flex-col 
justify-between 
h-1/6 
py-1 px-2 
text-sm 
border-b-2 
cursor-default
`;
