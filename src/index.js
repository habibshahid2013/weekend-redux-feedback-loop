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
    if (action.type === "FEELING_INFO") {
        return (state = action.payload);
    }
    return state;
};

const understandingReducer = (state = 0, action) => {
    console.log('got an understanding action 🚶‍♂️', action);
    if (action.type === "UNDERSTANDING_INFO") {
        return (state = action.payload);
    }
    return state;
};
const commentsReducer = (state = 0, action) => {
    console.log('got an comment action 🍟', action);
    if (action.type === "COMMENTS_INFO") {
        return (state = action.payload);
    }
    return state;
};
const supportReducer = (state = 0, action) => {
    console.log('got an support action 💂‍♂️', action);
    if (action.type === "SUPPORT_INFO") {
        return (state = action.payload);
    }
    return state;
};


const reduxStore = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        commentsReducer,
        supportReducer,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
