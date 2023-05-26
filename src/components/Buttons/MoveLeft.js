import { React, useEffect, useState } from 'react';

import { AiOutlineLeftCircle } from 'react-icons/ai';

export default function MoveLeft({ scrollRef, onClick }) {
  const [active, setActive] = useState(false);

  return (
    <div>
      {scrollRef && (
        <button
          type="button"
          className={`text-white text-5xl cursor-pointer m-2 `}
          onClick={() => onClick('left', scrollRef)}
        >
          <AiOutlineLeftCircle />
        </button>
      )}
    </div>
  );
}
