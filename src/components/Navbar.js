import React from 'react';
import tw from 'tailwind-styled-components';
import '../styles/color.css';
import '../styles/font.css';

export default function Navbar() {
  const Sidebar = tw.div`
    w-56
    h-screen
    bg-black
    fixed
  `;
  return (
    <>
      <Sidebar />
      <Sidebar />
    </>
  );
}
