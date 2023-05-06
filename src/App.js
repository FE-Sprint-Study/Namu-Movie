import './App.css';
import React from 'react';

import Navbar from './components/Navbar';
import Main from './pages/Main';

function App() {
  return (
    <div className="App flex">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
