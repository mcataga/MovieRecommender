import React from 'react';
import './App.css';
import {movieList, ratings, users} from './data';
import {Dropdown, Button} from "react-bootstrap";

function Form2() {
  return (
      <div className="nav-container">
        <div className ="centerFriends">
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Choose User Dropdown Menu
        </Dropdown.Toggle>
        <Dropdown.Menu>
          users.for
          <div>
            <Dropdown.Item href="#/action-1">User 1</Dropdown.Item>
          </div>
        </Dropdown.Menu>
        </Dropdown>
        <Button className="calc-button" as="input" type="button" value="Run Calculations" />{' '}
      </div>
    </div>
  );
}

export default Form2;
