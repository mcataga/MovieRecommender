import React from 'react';
import './App.css';
import Body from './components/Body';
import MovieBox from './components/MovieBox';
import RatingBox from './components/RatingBox';
import * as ReactBootStrap from "react-bootstrap";
import Form2 from './Form2';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <ReactBootStrap.Navbar.Brand href="#home">Sample Text</ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
      <ReactBootStrap.Nav className="mr-auto">
        <Router>
          <ReactBootStrap.Nav.Link href="/form1">Form 1</ReactBootStrap.Nav.Link>
          <Link to="/form2">
            <ReactBootStrap.Nav.Link href="/form2">Form 2</ReactBootStrap.Nav.Link>
          </Link>
          <Route path="/form2" component={Form2}/>
        </Router>
      </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
      
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
