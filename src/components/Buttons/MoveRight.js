import React from 'react';

import { AiOutlineRightCircle } from 'react-icons/ai';

export default function MoveRight({ scrollRef, onClick }) {
  return (
    <div>
      {scrollRef && (
        <button
          type="button"
          className={`text-white text-5xl cursor-pointer m-2 `}
          onClick={() => onClick('right', scrollRef)}
        >
          <AiOutlineRightCircle />
        </button>
      )}
    </div>
  );
}
