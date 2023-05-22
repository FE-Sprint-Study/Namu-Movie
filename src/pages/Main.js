import React, { useEffect, useState, useRef } from 'react';
import tw from 'tailwind-styled-components';

import Swiper from '../components/Swiper';
import MovieCard from '../components/MovieCard';
import movieApi from '../apis/movieApi';

export default function Main() {
  const [popularData, setPopularData] = useState(null);
  const [topRatedData, setTopRatedData] = useState(null);
  const [dayPopularData, setDayPopularData] = useState(null);
  const [weekPopularData, setWeekPopularData] = useState(null);
  const [nowPlayingData, setNowPlayingData] = useState(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();

  const scrollRef = useRef(null);

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

  const throttle = (func, ms) => {
    let throttled = false;
    return (...args) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };

  const delay = 10;

  const onDragStart = e => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = e => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;

      scrollRef.current.scrollLeft = startX - e.pageX;

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };

  const onThrottleDragMove = throttle(onDragMove, delay);

  return (
    <MainContainer>
      <div>
        <div className="flex justify-center items-center">
          {popularData && <Swiper movieData={popularData} />}
        </div>
        <div className="flex flex-col text-white m-8 ml-20 mr-20">
          <SectionTitle>인기 TOP10 영화</SectionTitle>
          <ScrollContainer
            ref={scrollRef}
            onMouseDown={onDragStart}
            onMouseMove={onThrottleDragMove}
            onMouseUp={onDragEnd}
            onMouseLeave={onDragEnd}
            onTouchStart={onDragStart}
            onTouchMove={onThrottleDragMove}
            onTouchEnd={onDragEnd}
            onTouchCancel={onDragEnd}
            tabIndex={0}
          >
            {popularData &&
              popularData.results
                .slice(0, 10)
                .map(data => <MovieCard movieData={data} key={data.id} />)}
          </ScrollContainer>

          <SectionTitle>일간 인기 영화</SectionTitle>
          <ScrollContainer>
            {dayPopularData &&
              dayPopularData.results.map(data => (
                <MovieCard movieData={data} key={data.id} />
              ))}
          </ScrollContainer>

          <SectionTitle>주간 인기 영화</SectionTitle>
          <ScrollContainer>
            {weekPopularData &&
              weekPopularData.results.map(data => (
                <MovieCard movieData={data} key={data.id} />
              ))}
          </ScrollContainer>

          <SectionTitle>역대 인기 영화</SectionTitle>
          <ScrollContainer>
            {topRatedData &&
              topRatedData.results.map(data => (
                <MovieCard movieData={data} key={data.id} />
              ))}
          </ScrollContainer>

          <SectionTitle>현재 상영중인 영화</SectionTitle>
          <ScrollContainer>
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
  overflow-scroll
  h-screen
  scrollbar-hide
`;

const SectionTitle = tw.div`
  text-5xl
  font-bold
  cursor-default
`;

const ScrollContainer = tw.div`
  flex
  flex-row
  w-full
  overflow-x-scroll
  scrollbar-hide
`;
