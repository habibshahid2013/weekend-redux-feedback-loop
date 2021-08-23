import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react';


function Support() {

    function backButton() {

        savePage.push('/understanding')
    }
    let savePage = useHistory()



    //Set up dispatch
    const dispatch = useDispatch();

    //Set up useState
    const [support, setSupport] = useState(0);

    function nextPage() {
        //Set up conditionals to make sure the reducer were passed through correctly
        //Validation to make sure the inputs are providing proper data 
         if(   support.length != null &&
            support.length < 2 &&
            support.length === 1 &
            support >= 0 &&
            support <= 5

         ){
        dispatch({
            type: "SUPPORT_INFO",
            payload: support

        })
        //make sure history went to the next page 
        savePage.push('/comments')
        }
     else {
        alert("{Please enter a value between 0-5")
    }
    }

    return (
        <div>
            <h1>Support</h1>
            <h2>How well are you being supported?</h2>
            <input
                type="number"
                min={0}
                max={5}
                value={support}
                placeholder="1-5"
                onChange={(event) => setSupport(event.target.value)} />
            <button onClick={nextPage}>Next Page</button>
            <button onClick={backButton}> Back</button>
        </div>


    )

}

export default Support;