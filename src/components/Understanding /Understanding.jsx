import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react';


function Understanding() {

    //The history button is called here
    let savePage = useHistory()

    function backButton() {

        savePage.push('/feeling')
    }

    const [understanding, setUnderstanding] = useState(0);
    
    //Set up dispatch
    const dispatch = useDispatch();



    function nextPage() {
         //Set up conditionals to make sure the reducer were passed through correctly
         //Validation to make sure the inputs are providing proper data 
        if (
            understanding.length != null &&
            understanding.length < 2 &&
            understanding.length === 1 & 
            understanding >= 0 &&
            understanding <= 5 
        ){

        dispatch({
            //The payload is being dispatch to the index.js 
            type: "UNDERSTANDING_INFO",
            payload: understanding

        })
        //make sure history went to the next page 
        savePage.push('/support')
    }
     else {
        alert ("{Please enter a value between 0-5")
    }
}

    return (
        <div>
            <h1>Understanding </h1>
            <h2>How well are you understanding things? 1-5</h2>
            <input 
            required
            value={understanding}
            min={1}
            max={5}
            onChange={(event) => setUnderstanding(event.target.value)}/>
            <button onClick={nextPage}>Next Page</button>
            <button onClick={backButton}>Back</button>
        </div>

    )

    
}

export default Understanding;