import { React, useState, useEffect } from 'react';

import { AiOutlineUpCircle } from 'react-icons/ai';

export default function MoveTop() {
  const [position, setPosition] = useState(0);

  function onScroll() {
    setPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const moveTopHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      disabled={position === 0}
      className={`fixed bottom-10 right-10 text-6xl text-white ${
        position === 0 ? 'opacity-20 cursor-not-allowed' : 'cursor-pointer'
      }`}
      onClick={moveTopHandler}
    >
      <AiOutlineUpCircle />
    </button>
  );
}
