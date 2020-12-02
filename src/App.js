import React from 'react';
import './App.css';
import Body from './components/Body';
import MovieBox from './components/MovieBox';
import Form2 from './Form2';
import Calcs from './Calcs';
import * as ReactBootStrap from "react-bootstrap";
import Navbar from './NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
        <>
        <Router>
        <Navbar />
        <header className="app-header">
          <h1>Recommender User Interface</h1>
        </header>
        <Switch>
          <Route path='/calcs' exact component={Calcs} />
          <Route path='/form2' component={Form2} />
        </Switch>
      </Router>
      </>
  );
}

export default App;
