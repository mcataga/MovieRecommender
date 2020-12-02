import React from 'react';
import './App.css';
import Body from './components/Body';
import MovieBox from './components/MovieBox';

function App() {
  return (
    <div className= "flexbox-container">
      <div className="App">
        <header className="app-header">
          <h1>Recommender User Interface</h1>
        </header>
        <Body/>
        <MovieBox/>
        <MovieBox/>
        <MovieBox/>
        <MovieBox/>
        <MovieBox/>
        <MovieBox/>
        <MovieBox/>
        <MovieBox/>
        <MovieBox/>
        <MovieBox/>
      </div>
    </div>
  );
}

export default App;
