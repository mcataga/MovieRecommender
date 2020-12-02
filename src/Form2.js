import React from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";

function Form2() {
  return (
      <div>
        <ReactBootStrap.Dropdown>
        <ReactBootStrap.Dropdown.Toggle variant="success" id="dropdown-basic">
            Choose User Dropdown Menu
        </ReactBootStrap.Dropdown.Toggle>
        <ReactBootStrap.Dropdown.Menu>
            <ReactBootStrap.Dropdown.Item href="#/action-1">User 1</ReactBootStrap.Dropdown.Item>
            <ReactBootStrap.Dropdown.Item href="#/action-2">User 2</ReactBootStrap.Dropdown.Item>
            <ReactBootStrap.Dropdown.Item href="#/action-3">User 3</ReactBootStrap.Dropdown.Item>
        </ReactBootStrap.Dropdown.Menu>
        </ReactBootStrap.Dropdown>
      </div>
  );
}

export default Form2;
