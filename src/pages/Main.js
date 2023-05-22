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
    movieApi
      .getPopular()
      .then(res => res.json())
      .then(json => {
        setPopularData(json);
      });
    movieApi
      .getTopRated()
      .then(res => res.json())
      .then(json => {
        setTopRatedData(json);
      });
    movieApi
      .getDayPopular()
      .then(res => res.json())
      .then(json => {
        setDayPopularData(json);
      });
    movieApi
      .getWeekPopular()
      .then(res => res.json())
      .then(json => {
        setWeekPopularData(json);
      });
    movieApi
      .getNowPlaying()
      .then(res => res.json())
      .then(json => {
        setNowPlayingData(json);
      });
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
          <div className="text-5xl font-bold cursor-default">
            인기 TOP10 영화
          </div>
          <div
            role="scrollbar"
            className="flex flex-row w-full overflow-x-scroll scrollbar-hide"
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
              popularData.results.map((data, idx) => {
                if (idx < 10) {
                  return <MovieCard movieData={data} key={data.id} />;
                }
                return null;
              })}
          </div>

          <div className="text-5xl font-bold cursor-default">
            일간 인기 영화
          </div>
          <div className="flex flex-row w-full overflow-x-scroll scrollbar-hide">
            {dayPopularData &&
              dayPopularData.results.map(data => {
                return <MovieCard movieData={data} key={dayPopularData.id} />;
              })}
          </div>

          <div className="text-5xl font-bold cursor-default">
            주간 인기 영화
          </div>
          <div className="flex flex-row w-full overflow-x-scroll scrollbar-hide">
            {weekPopularData &&
              weekPopularData.results.map(data => {
                return <MovieCard movieData={data} key={weekPopularData.id} />;
              })}
          </div>

          <div className="text-5xl font-bold cursor-default">
            역대 인기 영화
          </div>
          <div className="flex flex-row w-full overflow-x-scroll scrollbar-hide">
            {topRatedData &&
              topRatedData.results.map(data => {
                return <MovieCard movieData={data} key={topRatedData.id} />;
              })}
          </div>

          <div className="text-5xl font-bold cursor-default">
            현재 상영중인 영화
          </div>
          <div className="flex flex-row w-full overflow-x-scroll scrollbar-hide">
            {nowPlayingData &&
              nowPlayingData.results.map(data => {
                return <MovieCard movieData={data} key={nowPlayingData.id} />;
              })}
          </div>
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
