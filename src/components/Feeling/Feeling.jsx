import React from 'react'
import {  useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react';

function Feeling() {
    //The history button is called here
    let savePage = useHistory()

    //Set up dispatch
    const dispatch = useDispatch();

    //Set up useState
    const [feelings, setFeelings] = useState(0);

    function nextPage() {
         //Set up conditionals to make sure the reducer were passed through correctly
        if(
            feelings.length != null &&
            feelings.length < 2 &&
            feelings.length === 1 &
            feelings >= 0 &&
            feelings <= 5
        ) {

        dispatch({
            //The payload is being dispatch to the index.js 
            type: "FEELING_INFO",
            payload: feelings

        })
        //make sure history went to the next page 
        savePage.push('/understanding')
    }
     else {
        alert("{Please enter a value between 0-5")
    }
    }
    
    return (
        <div>
            <h1>Feeling</h1>
            <h2>Are you feeling ok today? </h2>
            <input 
            type="number"
            min={0}
            max={10}
            value={feelings}
            onChange={(event) => setFeelings(event.target.value)}/>
            <button onClick={nextPage}>Next</button>
        </div>


    )  

}


export default Feeling;