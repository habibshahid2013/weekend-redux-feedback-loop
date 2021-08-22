import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react';

function Understanding() {

    let savePage = useHistory()

    const [understanding, setUnderstanding] = useState(0);
    
    //Set up dispatch
    const dispatch = useDispatch();

    function nextPage() {

        if (
            understanding.length != null &&
            understanding.length < 2 &&
            understanding.length === 1 & 
            understanding >= 0 &&
            understanding <= 5 
        ){

        dispatch({
            type: "UNDERSTANDING_INFO",
            payload: understanding

        })

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
        </div>

    )

    
}

export default Understanding;