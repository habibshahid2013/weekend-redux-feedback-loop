import React from 'react';
import axios from 'axios';
import './App.css';
import Comments from '../Comments/Comments'
import Feeling from '../Feeling/Feeling'
import Support from '../Support/Support'
import Understanding from '../Understanding /Understanding';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <div>
          <ul>
            <li>
              <Link to="/Comments">Comments</Link>
            </li>
            <li>
              <Link to="/feeling">Feeling</Link>
            </li>
            <li>
              <Link to="/Support">Support</Link>
            </li>
            <li>
              <Link to="/Understanding">Understanding</Link>
            </li>
          </ul>

         
            <Route path="/Comments">
            <Comments />
            </Route>
            <Route path="/Feeling">
            <Feeling />
            </Route>
            <Route path="/Support">
            <Support />
            </Route>
          <Route path="/Understanding">
            <Understanding />
          </Route>
          
        </div>
      </Router>

    </div>
  );
}

export default App;
