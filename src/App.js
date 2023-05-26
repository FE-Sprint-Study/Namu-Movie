/* eslint-disable import/no-extraneous-dependencies */
import { React, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import tw from 'tailwind-styled-components';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import MoveTop from './components/Buttons/MoveTop';

import { PATH } from './constants/constants';

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
            <Route path={PATH.MAIN_PAGE} element={<Main />} />
            <Route path={PATH.SEARCH_PAGE} element={<Search />} />
            <Route path={PATH.GENRE_PAGE} element={<Genre />} />
            <Route path={PATH.NOT_FOUND} element={<Main />} />
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
