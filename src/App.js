import React from 'react';
import { Routes, Route } from 'react-router-dom';

import tw from 'tailwind-styled-components';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <AppWrapper>
        <Navbar curPage="Home" />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<Search />} />
          <Route path="/genre" element={<Main />} />
        </Routes>
      </AppWrapper>
    </div>
  );
}

const AppWrapper = tw.div`
  flex
  relative
`;

export default App;
