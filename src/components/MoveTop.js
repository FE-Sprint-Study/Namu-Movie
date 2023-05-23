import React from 'react';

import { AiOutlineUpCircle } from 'react-icons/ai';

export default function MoveTop() {
  const moveTopHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      className="text-white fixed bottom-10 right-10 text-6xl"
      onClick={moveTopHandler}
    >
      <AiOutlineUpCircle />
    </button>
  );
}
