import React, { useState, useEffect } from 'react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';

export default function Swiper({ movieData }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const movieBackDropArr = movieData.results.map(data => {
    return `http://image.tmdb.org/t/p/original/${data.backdrop_path}`;
  });

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? movieBackDropArr.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === movieBackDropArr.length - 1 ? 0 : prevIndex + 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 10000); // 3초마다 이미지 변경
    console.log('mount');
    return () => {
      clearInterval(interval);
      console.log('unmount');
    };
  }, [handlePrev, handleNext]); // 버튼이 눌릴시 시간 초기화

  return (
    <div className="flex items-center justify-center h-128">
      <div className="relative w-full h-full">
        <button
          type="button"
          className="absolute top-1/2 left-0 transform -translate-y-1/2"
          onClick={handlePrev}
        >
          <div className="drop-shadow-3xl">
            <AiOutlineDoubleLeft size="70" color="white" />
          </div>
        </button>
        <button
          type="button"
          className="absolute top-1/2 right-0 transform -translate-y-1/2"
          onClick={handleNext}
        >
          <div className="drop-shadow-3xl">
            <AiOutlineDoubleRight size="70" color="white" />
          </div>
        </button>
        <img
          src={movieBackDropArr[currentIndex]}
          alt="Slideshow Image"
          className="w-screen h-50rem  min-w-full min-h-test object-cover"
        />
      </div>
    </div>
  );
}
