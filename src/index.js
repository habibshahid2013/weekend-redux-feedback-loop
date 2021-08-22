import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//Set Up Redux and logger
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
//Install Logger 
import { logger } from 'redux-logger';



//Create reducer for each component  
const feelingReducer = (state =0, action) => {
    console.log('got an feeling action 🍍', action);
      //the action type has to match the dispatch type on the component
    if (action.type === "FEELING_INFO") {
        return (state = action.payload);
    }
    return state;
};
//Create reducer for each component  
const understandingReducer = (state = 0, action) => {
    console.log('got an understanding action 🚶‍♂️', action);
      //the action type has to match the dispatch type on the component
    if (action.type === "UNDERSTANDING_INFO") {
        return (state = action.payload);
    }
    return state;
};
//Create reducer for each component  
const commentsReducer = (state = 0, action) => {
    console.log('got an comment action 🍟', action);
    //the action type has to match the dispatch type on the component
    if (action.type === "COMMENTS_INFO") {
        return (state = action.payload);
    }
    return state;
};
//Create reducer for each component  
const supportReducer = (state = 0, action) => {
    console.log('got an support action 💂‍♂️', action);
      //the action type has to match the dispatch type on the component
    if (action.type === "SUPPORT_INFO") {
        return (state = action.payload);
    }
    return state;
};

//Store is created and the reducers are placed within the store
const reduxStore = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        commentsReducer,
        supportReducer,
    }),
    //The logger is also stored within the store
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
