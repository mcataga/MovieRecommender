import React from 'react';
import './RatingBox';
import Button from 'react-bootstrap/Button'

function RatingBox(){
    return (
        <div className= "rating-container">
            <div className = "Body">
                <div className="rating-field">
                    <Button variant="primary" onClick={troll}>0</Button>
                    <Button variant="primary" onClick={troll}>1</Button>
                    <Button variant="primary" onClick={troll}>2</Button>
                    <Button variant="primary" onClick={troll}>3</Button>
                    <Button variant="primary" onClick={troll}>4</Button>
                    <Button variant="primary" onClick={troll}>5</Button>
                    <Button variant="primary" onClick={troll}>6</Button>
                </div>
            </div>
        </div>
    );
}

function troll() {
    console.log('this shit is ass');
}
export default RatingBox;