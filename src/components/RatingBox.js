import React from 'react';
import {Button, ButtonGroup} from "react-bootstrap";

class RatingBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: null
        }
}

     handleClick=(e)=>{
        this.props.getValue(e.target.value);
        e.preventDefault();
      }
    handleClick2=(e)=>{
        this.setState({ active: 1 });
        e.preventDefault();
    }
    handleClick3=(e)=>{
        this.setState({ active: 2 });
        e.preventDefault();
    }
    handleClick4=(e)=>{
        this.setState({ active: 3 });
        e.preventDefault();
    }
    handleClick5=(e)=>{
        this.setState({ active: 4 });
        e.preventDefault();
    }
    handleClick6=(e)=>{
        this.setState({ active: 5 });
        e.preventDefault();
    }
    handleClick7=(e)=>{
        this.setState({ active: 6 });
        e.preventDefault();
    }
    handleClick8=(e)=>{
        this.setState({ active: 7 });
        e.preventDefault();
    }

      render() {

        const btnActive = {
            backgroundColor: "deeppink"
          };
          
        const  btnNormal = {
            backgroundColor: "#007bff"
          };

    return (
        <div className= "rating-container">
            <div className = "Body">
                <div className="rating-field">
                    <ButtonGroup type="radio" name="options" defaultValue={1} onClick={this.handleClick}>
                    <Button value={-1} onClick={this.handleClick2} style={this.state.active === 1 ? btnActive : btnNormal}>Haven't Watched</Button>
                    <Button value={0} onClick={this.handleClick3} style={this.state.active === 2 ? btnActive : btnNormal}>0</Button>
                    <Button value={1} onClick={this.handleClick4} style={this.state.active === 3 ? btnActive : btnNormal}>1</Button>
                    <Button value={2} onClick={this.handleClick5} style={this.state.active === 4 ? btnActive : btnNormal}>2</Button>
                    <Button value={3} onClick={this.handleClick6} style={this.state.active === 5 ? btnActive : btnNormal}>3</Button>
                    <Button value={4} onClick={this.handleClick7} style={this.state.active === 6 ? btnActive : btnNormal}>4</Button>
                    <Button value={5} onClick={this.handleClick8} style={this.state.active === 7 ? btnActive : btnNormal}>5</Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    );
    }
}

export default RatingBox;