import React from 'react';
import './RatingBox';
import * as ReactBootStrap from "react-bootstrap";

function RatingBox(){
    return (
        <div className= "rating-container">
            <div className = "Body">
                <div className="rating-field">
                    <ReactBootStrap.ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                    <ReactBootStrap.ToggleButton value={0}>0</ReactBootStrap.ToggleButton>
                    <ReactBootStrap.ToggleButton value={1}>1</ReactBootStrap.ToggleButton>
                    <ReactBootStrap.ToggleButton value={2}>2</ReactBootStrap.ToggleButton>
                    <ReactBootStrap.ToggleButton value={3}>3</ReactBootStrap.ToggleButton>
                    <ReactBootStrap.ToggleButton value={4}>4</ReactBootStrap.ToggleButton>
                    <ReactBootStrap.ToggleButton value={5}>5</ReactBootStrap.ToggleButton>
                    </ReactBootStrap.ToggleButtonGroup>
                </div>
            </div>
        </div>
    );
}

export default RatingBox;