import React from 'react';
import { Routes, Route } from 'react-router-dom';

import tw from 'tailwind-styled-components';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import Search from './pages/Search';
import Genre from './pages/Genre';

function App() {
  return (
    <div className="App">
      <AppWrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<Search />} />
          <Route path="/genre" element={<Genre />} />
        </Routes>
      </AppWrapper>
    </div>
  );
}

const AppWrapper = tw.div`
  flex
  relative
  bg-black
`;

export default App;
