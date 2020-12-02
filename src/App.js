import React from 'react';
import './App.css';
import Body from './components/Body';
import MovieBox from './components/MovieBox';
import RatingBox from './components/RatingBox';

function App() {
  return (
    <div className="container-box">
      <div className="App">
        <header className="app-header">
          <h1>Recommender User Interface</h1>
        </header>
        <Body/>
        <div className="container-box">
          <MovieBox class="movie-box"/>
          <RatingBox class="rating-box"/>
        </div>
        <div className="container-box">
          <MovieBox class="movie-box"/>
          <RatingBox class="rating-box"/>
        </div>
        <div className="container-box">
          <MovieBox class="movie-box"/>
          <RatingBox class="rating-box"/>
        </div>
        <div className="container-box">
          <MovieBox class="movie-box"/>
          <RatingBox class="rating-box"/>
        </div>
        <div className="container-box">
          <MovieBox class="movie-box"/>
          <RatingBox class="rating-box"/>
        </div>
        <div className="container-box">
          <MovieBox class="movie-box"/>
          <RatingBox class="rating-box"/>
        </div>
      </div>
    </div>
  );
}

export default App;
