import React from 'react';

import tw from 'tailwind-styled-components';
import Navbar from './components/Navbar';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <AppWrapper>
        <Navbar curPage="Home" />
        <Main />
      </AppWrapper>
    </div>
  );
}

const AppWrapper = tw.div`
  flex
  relative
`;

export default App;
