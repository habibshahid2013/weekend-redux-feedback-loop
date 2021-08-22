import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react';

function SurveyHomePage() {

    let savePage = useHistory()

    //Set up dispatch
    const dispatch = useDispatch();

    //Set up useState
    const [survey, setSurveyHomePage] = useState('');

    function nextPage() {

        dispatch({
            type: "SURVEY_INFO",
            payload: survey

        })
        savePage.push('/feeling')
    }


    return (
        <div>
            <h1>Survey Home Page</h1>
            <h2>Please Start Survey</h2>
            <input
                value={survey}
                onChange={(event) => setSurveyHomePage(event.target.value)} />
            <button onClick={nextPage}>Submit</button>
        </div>


    )
    
}

export default SurveyHomePage;