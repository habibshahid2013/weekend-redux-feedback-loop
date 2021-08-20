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
const feeling = (state =0, action) => {
    console.log('got an feeling action 🍍', action);
    if (action.type === "FEELING") {
        return (state = action.payload);
    }
    return state;
};

const understanding = (state = 0, action) => {
    console.log('got an understanding action 🚶‍♂️', action);
    if (action.type === "UNDERSTANDING") {
        return (state = action.payload);
    }
    return state;
};
const comments = (state = 0, action) => {
    console.log('got an comment action 🍟', action);
    if (action.type === "COMMENTS") {
        return (state = action.payload);
    }
    return state;
};
const support = (state = 0, action) => {
    console.log('got an support action 💂‍♂️', action);
    if (action.type === "SUPPORT") {
        return (state = action.payload);
    }
    return state;
};


const reduxStore = createStore(
    combineReducers({
        feeling,
        understanding,
        comments,
        support,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
