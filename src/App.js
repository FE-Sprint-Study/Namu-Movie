import './App.css';
import React from 'react';

import Navbar from './components/Navbar';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MovieCard />
    </div>
  );
}

export default App;
