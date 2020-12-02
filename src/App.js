import React from 'react';
import './App.css';
import Body from './components/Body';
import MovieBox from './components/MovieBox';
import RatingBox from './components/RatingBox';
import * as ReactBootStrap from "react-bootstrap";
import Form2 from './Form2';
import NavBar from './NavBar';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar/>
      <div className="App">
        <header className="app-header">
          <h1>Recommender User Interface</h1>
        </header>
        <Body/>
        <div className="card-container">
          <ReactBootStrap.Card style={{ width: '30rem' }}>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>Movie Title 1</ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              Please rate the movie from the following ratings, 0 being worst and 5 being best.
            </ReactBootStrap.Card.Text>
            <RatingBox class="rating-box"/>
          </ReactBootStrap.Card.Body>
          </ReactBootStrap.Card>
        </div>
        <div className="card-container">
          <ReactBootStrap.Card style={{ width: '30rem' }}>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>Movie Title 2</ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              Please rate the movie from the following ratings, 0 being worst and 5 being best.
            </ReactBootStrap.Card.Text>
            <RatingBox class="rating-box"/>
          </ReactBootStrap.Card.Body>
          </ReactBootStrap.Card>
        </div>
        <div className="card-container">
          <ReactBootStrap.Card style={{ width: '30rem' }}>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>Movie Title 3</ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              Please rate the movie from the following ratings, 0 being worst and 5 being best.
            </ReactBootStrap.Card.Text>
            <RatingBox class="rating-box"/>
          </ReactBootStrap.Card.Body>
          </ReactBootStrap.Card>
        </div>
        <div className="card-container">
          <ReactBootStrap.Card style={{ width: '30rem' }}>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>Movie Title 4</ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              Please rate the movie from the following ratings, 0 being worst and 5 being best.
            </ReactBootStrap.Card.Text>
            <RatingBox class="rating-box"/>
          </ReactBootStrap.Card.Body>
          </ReactBootStrap.Card>
        </div>
        <div className="card-container">
          <ReactBootStrap.Card style={{ width: '30rem' }}>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>Movie Title 5</ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              Please rate the movie from the following ratings, 0 being worst and 5 being best.
            </ReactBootStrap.Card.Text>
            <RatingBox class="rating-box"/>
          </ReactBootStrap.Card.Body>
          </ReactBootStrap.Card>
        </div>
        <div className="card-container">
          <ReactBootStrap.Card style={{ width: '30rem' }}>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>Movie Title 6</ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              Please rate the movie from the following ratings, 0 being worst and 5 being best.
            </ReactBootStrap.Card.Text>
            <RatingBox class="rating-box"/>
          </ReactBootStrap.Card.Body>
          </ReactBootStrap.Card>
        </div>
      </div>
    </div>
  );
}

export default App;
