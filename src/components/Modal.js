/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import tw from 'tailwind-styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import StarRatings from 'react-star-ratings';

import { modalActions } from '../store/modalSlice';
import movieApi from '../apis/movieApi';
import TMDBTagList from '../constants/TMDBTagList';

export default function Modal() {
  const movieData = useSelector(state => state.modal.item);
  const dispatch = useDispatch();

  const posterUrl = movieData.poster_path
    ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
    : 'https://skydomepictures.com/wp-content/uploads/2018/08/movie-poster-coming-soon-2.png';
  const backdropUrl = `https://image.tmdb.org/t/p/w1280${movieData.backdrop_path}`;
  const movieId = movieData.id;
  const year = movieData.release_date.slice(0, 4);
  const rating = Number(parseFloat(movieData.vote_average, 10).toFixed(1)) / 2;
  const { overview } = movieData;
  const genreIds = movieData.genre_ids;
  const tags = TMDBTagList.TMDBTagList.filter(tag =>
    genreIds.includes(tag.id),
  ).slice(0, 5);

  const [runtime, setRuntime] = useState(); // 상영시간
  const [casts, setCasts] = useState(); // 출연 배우
  const [videoKey, setVideoKey] = useState();

  const fetchData = useCallback(async () => {
    const time = await movieApi.getRuntime(movieId);
    const cast = await movieApi.getCast(movieId);
    const key = await movieApi.getVideo(movieId);
    const sliceCast = cast.slice(0, 5);
    const castArr = sliceCast.map(sc => `${sc.name} (${sc.character})`);
    setRuntime(time);
    setCasts(castArr);
    setVideoKey(key);
  }, [movieId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <ModalWrapper>
      <Backdrop onClick={() => dispatch(modalActions.reset())} />
      <ModalContainer>
        <BackdropImg src={backdropUrl} />

        <FirstSection>
          <h1 className="text-4xl">{movieData.title}</h1>
          <div className="flex my-1 items-center justify-start text-sm">
            <span className="mx-1">{year}년</span>
            <span className="mx-1">{runtime || '?'}분</span>
            <StarRatings
              rating={rating}
              starRatedColor="yellow"
              numberOfStars={5}
              starDimension="25px"
              starSpacing="1px"
              name="rating"
            />
            <span className="mx-1">({rating})</span>
          </div>
          <div className="text-gray-300 text-xs mt-2">출연</div>
          <div className="flex flex-wrap w-2/3 justify-start mt-1">
            {casts
              ? casts.map(cast => <span className="mr-4">{cast}</span>)
              : '출연 배우가 제공되지 않습니다.'}
          </div>
        </FirstSection>

        <Divider />

        <SecondSection>
          <SecondSectionInnerLeft>
            <img className="w-48" src={posterUrl} alt="메인 포스터" />
            <div className="flex flex-col items-center h-full justify-between py-2 mx-4">
              <Overview>{overview || '줄거리가 제공되지 않습니다.'}</Overview>
              <TagContainer>
                {tags.map(tag => (
                  <Tag>{tag.name}</Tag>
                ))}
              </TagContainer>
            </div>
          </SecondSectionInnerLeft>
          <SecondSectionInnerRight>
            <iframe
              title="movie"
              src={`https://www.youtube.com/embed/${videoKey}`}
              width={600}
              height={300}
            />
          </SecondSectionInnerRight>
        </SecondSection>

        <CloseButton onClick={() => dispatch(modalActions.reset())}>
          <AiOutlineClose size={24} />
        </CloseButton>
      </ModalContainer>
    </ModalWrapper>
  );
}

const CloseButton = tw.button`
  border-none
  outline-none;
  bg-transparent
  absolute
  top-2
  right-2
  p-2
  rounded-full
  z-20
`;

const Overview = tw.section`
  w-80
  text-sm
  leading-5
`;

const Divider = tw.hr`
  w-85%
  border-t
  border-solid
  border-slate-300
  z-20
`;

const Tag = tw.button`
  text-white
  mx-1
  px-3
  py-2
  text-0.6rem
  border-2
  rounded-3xl
`;

const TagContainer = tw.div`
  w-full
  flex
  flex-wrap
  mt-2
`;

const BackdropImg = tw.img`
  opacity-90
  absolute
  top-0
  left-0
  w-full
  h-full
  object-cover
  z-0
  rounded-xl
`;

const ModalContainer = tw.section`
  relative
  w-modalContainerWidth
  h-modalContainerHeight
  flex
  flex-col
  items-center
  justify-center
  bg-black
  rounded-xl
  bg-no-repeat
  bg-cover
`;

const FirstSection = tw.section`
  w-modalFirstInnerWidth
  h-modalFirstInnerHeight
  flex
  flex-wrap
  flex-col
  justify-center
  m-1
  z-20
`;

const SecondSection = tw.section`
  w-modalSecondInnerWidth
  h-modalSecondInnerHeight
  flex
  flex-col
  flex-wrap
  justify-center
  items-center
  m-4
  z-20
`;

const SecondSectionInnerLeft = tw.section`
  w-3/5
  flex
  justify-start
  items-center
`;

const SecondSectionInnerRight = tw.section`
  w-2/5
  flex
  justify-end
  items-center
`;

const Backdrop = tw.section`
  fixed
  top-0
  left-0
  w-screen
  h-screen
  bg-black
  opacity-70
  z-10
`;

const ModalWrapper = tw.div`
  fixed
  top-0
  left-0
  w-screen
  h-screen
  flex
  items-center
  justify-center
  z-10
  text-white
`;
