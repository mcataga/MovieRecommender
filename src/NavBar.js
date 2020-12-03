import React from 'react';
import './NavBar';
import {Navbar, Nav} from "react-bootstrap";
import { Link } from 'react-router-dom';

function Body(){
    return (
        <div className = "Body">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">MovieRecommender</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Link to="/newCalc">
                <Nav.Link href="/newCalc">New User Calculation</Nav.Link>
            </Link>
                <Link to="/existingCalc">
                    <Nav.Link href="/existingCalc">Existing User Calculation</Nav.Link>
                </Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Body;