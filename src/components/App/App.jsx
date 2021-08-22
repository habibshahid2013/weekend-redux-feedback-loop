import React, { useEffect }  from 'react';
import axios from 'axios';
import './App.css';
import SurveyHomePage from '../SurveyHomePage/SurveyHomePage'
import Comments from '../Comments/Comments'
import Feeling from '../Feeling/Feeling'
import Support from '../Support/Support'
import Understanding from '../Understanding /Understanding';
import Review from '../Review/Review'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { useDispatch } from "react-redux";

function App() {


  const dispatch = useDispatch();

  //The use use effect acts as the on ready on the app.jsx
  useEffect(() => {
    console.log("in useEffect");
  }, []);


  // function refreshComments() {
  //   axios({
  //     method: "GET",
  //     url: "/api/page",
  //   })
  //     .then((response) => {
       
  //       console.log(response.data);
  //       // updates this through a dispatch to Redux
  //       dispatch({
  //         type: "FEELING_INFO",
  //         payload: response.data,
  //       });
   
  //     })
  //     .catch((error) => {
  //       console.log("error on GET", error);
  //     });
  // }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
           <Router>
            <Route exact path="/">
              <SurveyHomePage />
            </Route>
            <Route exact path="/feeling">
              <Feeling />
            </Route>
            <Route exact path="/understanding">
              <Understanding />
            </Route>
            <Route exact path="/comments">
            <Comments />
            </Route>
            <Route exact path="/support">
            <Support />
            </Route>
          <Route exact path="/review">
            <Review/>
          </Route>
        </Router>
    </div>
  );
}

export default App;
