import React from 'react';
import './App.css';
import Form2 from './Form2';
import {Calcs} from './Calcs';
import Navbar from './NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
        <>
        <Router>
        <Navbar />
        <header className="parent-app-header">
          <h1 className="app-header">Recommender User Interface</h1>
        </header>
        <Switch>
          <Route exact path='/newCalc' component={Calcs} />
          <Route path='/existingCalc' component={Form2} />
        </Switch>
      </Router>
      </>
  );
}

export default App;
