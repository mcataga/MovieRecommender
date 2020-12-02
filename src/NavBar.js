import React from 'react';
import './NavBar';
import * as ReactBootStrap from "react-bootstrap";
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Form2 from './Form2';
import { Link } from 'react-router-dom';

function Body(){
    return (
        <div className = "Body">
            <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <ReactBootStrap.Navbar.Brand href="#home">Sample Text</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto">
                <Router>
                <ReactBootStrap.Nav.Link href="/home">Home</ReactBootStrap.Nav.Link>
                <Link to="/form2">
                    <ReactBootStrap.Nav.Link href="/calculations">Calculations</ReactBootStrap.Nav.Link>
                </Link>
                <Route path="/form2" component={Form2}/>
                </Router>
            </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        </div>
    );
}

export default Body;