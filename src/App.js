import React from 'react';

import Navbar from './components/Navbar';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <div className="flex">
        <Navbar curPage="Home" />
      </div>
      <div className="flex">
        <Main />
      </div>
    </div>
  );
}

export default App;
