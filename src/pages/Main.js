import React, { useEffect, useState, useRef } from 'react';
import tw from 'tailwind-styled-components';

import Swiper from '../components/Swiper';
import MovieCard from '../components/MovieCard';
import movieApi from '../apis/movieApi';
import MoveLeft from '../components/Buttons/MoveLeft';
import MoveRight from '../components/Buttons/MoveRight';

import { SECTION_TITLE } from '../constants/constants';

export default function Main() {
  const [popularData, setPopularData] = useState(null);
  const [topRatedData, setTopRatedData] = useState(null);
  const [dayPopularData, setDayPopularData] = useState(null);
  const [weekPopularData, setWeekPopularData] = useState(null);
  const [nowPlayingData, setNowPlayingData] = useState(null);

  const popularScrollRef = useRef(null);
  const dayPopularScrollRef = useRef(null);
  const weekPopularScrollRef = useRef(null);
  const topRatedScrollRef = useRef(null);
  const nowPlayingScrollRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const popularResponse = await movieApi.getPopular();
      const popularJson = await popularResponse.json();
      setPopularData(popularJson);

      const topRatedResponse = await movieApi.getTopRated();
      const topRatedJson = await topRatedResponse.json();
      setTopRatedData(topRatedJson);

      const dayPopularResponse = await movieApi.getDayPopular();
      const dayPopularJson = await dayPopularResponse.json();
      setDayPopularData(dayPopularJson);

      const weekPopularResponse = await movieApi.getWeekPopular();
      const weekPopularJson = await weekPopularResponse.json();
      setWeekPopularData(weekPopularJson);

      const nowPlayingResponse = await movieApi.getNowPlaying();
      const nowPlayingJson = await nowPlayingResponse.json();
      setNowPlayingData(nowPlayingJson);
    };

    fetchData();
  }, []);

  const moveHandler = (type, scrollRef) => {
    if (type === 'right') {
      scrollRef.scrollTo({
        left: scrollRef.scrollLeft + scrollRef.clientWidth,
        behavior: 'smooth',
      });
    } else {
      scrollRef.scrollTo({
        left: scrollRef.scrollLeft - scrollRef.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <MainContainer>
      <div>
        <div className="flex justify-center items-center">
          {topRatedData && <Swiper movieData={topRatedData} />}
        </div>
        <div className="flex flex-col text-white m-8 ml-20 mr-32">
          <SectionHeader>
            <SectionTitle>{SECTION_TITLE.TOP10}</SectionTitle>
            <SectionButtons>
              {popularScrollRef && (
                <div className="flex">
                  <MoveLeft
                    scrollRef={popularScrollRef.current}
                    onClick={moveHandler}
                  />
                  <MoveRight
                    scrollRef={popularScrollRef.current}
                    onClick={moveHandler}
                  />
                </div>
              )}
            </SectionButtons>
          </SectionHeader>

          <ScrollContainer ref={popularScrollRef}>
            {popularData &&
              popularData.results
                .slice(0, 10)
                .map(data => <MovieCard movieData={data} key={data.id} />)}
          </ScrollContainer>

          <SectionHeader>
            <SectionTitle>{SECTION_TITLE.DAY_POPULAR}</SectionTitle>
            <SectionButtons>
              {dayPopularScrollRef && (
                <div className="flex">
                  <MoveLeft
                    scrollRef={dayPopularScrollRef.current}
                    onClick={moveHandler}
                  />
                  <MoveRight
                    scrollRef={dayPopularScrollRef.current}
                    onClick={moveHandler}
                  />
                </div>
              )}
            </SectionButtons>
          </SectionHeader>
          <ScrollContainer ref={dayPopularScrollRef}>
            {dayPopularData &&
              dayPopularData.results.map(data => (
                <MovieCard movieData={data} key={data.id} />
              ))}
          </ScrollContainer>

          <SectionHeader>
            <SectionTitle>{SECTION_TITLE.WEEK_POPULAR}</SectionTitle>
            <SectionButtons>
              {weekPopularScrollRef && (
                <div className="flex">
                  <MoveLeft
                    scrollRef={weekPopularScrollRef.current}
                    onClick={moveHandler}
                  />
                  <MoveRight
                    scrollRef={weekPopularScrollRef.current}
                    onClick={moveHandler}
                  />
                </div>
              )}
            </SectionButtons>
          </SectionHeader>
          <ScrollContainer ref={weekPopularScrollRef}>
            {weekPopularData &&
              weekPopularData.results.map(data => (
                <MovieCard movieData={data} key={data.id} />
              ))}
          </ScrollContainer>

          <SectionHeader>
            <SectionTitle>{SECTION_TITLE.TOP_RATED}</SectionTitle>
            <SectionButtons>
              {topRatedScrollRef && (
                <div className="flex">
                  <MoveLeft
                    scrollRef={topRatedScrollRef.current}
                    onClick={moveHandler}
                  />
                  <MoveRight
                    scrollRef={topRatedScrollRef.current}
                    onClick={moveHandler}
                  />
                </div>
              )}
            </SectionButtons>
          </SectionHeader>
          <ScrollContainer ref={topRatedScrollRef}>
            {topRatedData &&
              topRatedData.results.map(data => (
                <MovieCard movieData={data} key={data.id} />
              ))}
          </ScrollContainer>

          <SectionHeader>
            <SectionTitle>{SECTION_TITLE.NOW_PLAYING}</SectionTitle>
            <SectionButtons>
              {nowPlayingScrollRef && (
                <div className="flex">
                  <MoveLeft
                    scrollRef={nowPlayingScrollRef.current}
                    onClick={moveHandler}
                  />
                  <MoveRight
                    scrollRef={nowPlayingScrollRef.current}
                    onClick={moveHandler}
                  />
                </div>
              )}
            </SectionButtons>
          </SectionHeader>
          <ScrollContainer ref={nowPlayingScrollRef}>
            {nowPlayingData &&
              nowPlayingData.results.map(data => (
                <MovieCard movieData={data} key={data.id} />
              ))}
          </ScrollContainer>
        </div>
      </div>
    </MainContainer>
  );
}

const MainContainer = tw.div`
  w-[calc(100%-14rem)]
  ml-auto
  flex
  flex-col
  relative
  right-0
  h-full
  scrollbar-hide
`;

const SectionTitle = tw.div`
  text-5xl
  font-bold
  cursor-default
`;

const SectionHeader = tw.div`
  flex
  flex-row 
  justify-between 
  items-center
`;

const ScrollContainer = tw.div`
  flex
  flex-row
  w-full
  overflow-x-scroll
  scrollbar-hide
`;

const SectionButtons = tw.div`
  flex
  mr-10
  mt-2
`;
