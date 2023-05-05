import React from 'react';

import '../styles/color.css';
import '../styles/font.css';

export default function Navbar() {
  return (
    <div
      style={{
        width: '222px',
        height: '100vh',
        backgroundColor: 'black',
        borderRight: '3px solid var(--main-color)',
        position: 'fixed',
      }}
    >
      안녕하세요
    </div>
  );
}
