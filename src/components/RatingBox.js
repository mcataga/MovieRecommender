import React from 'react';
import './RatingBox';

function RatingBox(){
    return (
        <div className= "rating-container">
            <div className = "Body">
                <div className="rating-field">
                    <h1 className="individual-rate-box">0</h1>
                    <h1 className="individual-rate-box">1</h1>
                    <h1 className="individual-rate-box">2</h1>
                    <h1 className="individual-rate-box">3</h1>
                    <h1 className="individual-rate-box">4</h1>
                    <h1 className="individual-rate-box">5</h1>
                </div>
            </div>
        </div>
    );
}

export default RatingBox;