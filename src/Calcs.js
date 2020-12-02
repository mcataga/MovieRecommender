import React from 'react';
import RatingBox from './components/RatingBox';
import * as ReactBootStrap from "react-bootstrap";


function Calcs() {
  return (
    <>
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
    </>
  );
}

export default Calcs;