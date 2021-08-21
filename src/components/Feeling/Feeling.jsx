import React from 'react'
import {  useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react';

function Feeling() {

    let savePage = useHistory()

    //Set up dispatch
    const dispatch = useDispatch();

    //Set up useState
    const [feelings, setFeelings] = useState(0);

    function nextPage() {

        dispatch({
            type: "FEELING_INFO",
            payload: feelings

        })

        savePage.push('/understanding')
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