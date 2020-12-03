import React from 'react';
import {Card} from "react-bootstrap";

class Calcs2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            position: [],
            data: [],
            isVisible: true
        }
        this.movieList = movieList;
        this.ratings=ratings;
    }

render() {
    return (
        <div className="card-container">
        <Card style={{ width: '30rem' }} >
        <Card.Body>
        {/* <Card.Img variant="top" src={process.env.PUBLIC_URL + '/'+(i)+'.jpg'} ></Card.Img> */}
            <Card.Title>Title</Card.Title>
            <Card.Text>
            Please rate the movie from the following ratings, 0 being worst and 5 being best.
            </Card.Text>
        </Card.Body>
        </Card>
        </div>
    );
    }
}

export {Calcs2}