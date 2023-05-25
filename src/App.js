/* eslint-disable import/no-extraneous-dependencies */
import { React, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import tw from 'tailwind-styled-components';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import MoveTop from './components/Buttons/MoveTop';

const Main = lazy(() => import('./pages/Main'));
const Search = lazy(() => import('./pages/Search'));
const Genre = lazy(() => import('./pages/Genre'));

function App() {
  const modalIsOpen = useSelector(state => state.modal.isOpen);
  return (
    <div className="App">
      <AppWrapper>
        {modalIsOpen && <Modal />}
        <Navbar />
        <Suspense>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/search" element={<Search />} />
            <Route path="/genre" element={<Genre />} />
          </Routes>
        </Suspense>
        <MoveTop />
      </AppWrapper>
    </div>
  );
}

const AppWrapper = tw.div`
  flex
  relative
  bg-black
  min-h-screen
`;

export default App;
