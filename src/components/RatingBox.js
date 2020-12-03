import React from 'react';
import {Button, ButtonGroup} from "react-bootstrap";

class RatingBox extends React.Component {

     handleClick=(e)=>{
        this.props.getValue(e.target.value);
        e.preventDefault();
      }

      render() {
    return (
        <div className= "rating-container">
            <div className = "Body">
                <div className="rating-field">
                    <ButtonGroup type="radio" name="options" defaultValue={1} onClick={this.handleClick}>
                    <Button value={-1}>Haven't Watched</Button>
                    <Button value={0}>0</Button>
                    <Button value={1}>1</Button>
                    <Button value={2}>2</Button>
                    <Button value={3}>3</Button>
                    <Button value={4}>4</Button>
                    <Button value={5}>5</Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    );
    }
}

export default RatingBox;