import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react';

function Support() {

    let savePage = useHistory()

    //Set up dispatch
    const dispatch = useDispatch();

    //Set up useState
    const [support, setSupport] = useState(0);

    function nextPage() {

        dispatch({
            type: "SUPPORT_INFO",
            payload: support

        })


        savePage.push('/comments')
    }


    return (
        <div>
            <h1>Support</h1>
            <h2>How well are you being supported?</h2>
            <input
                type="text"
                value={support}
                placeholder="How can we best support you?"
                onChange={(event) => setSupport(event.target.value)} />
            <button onClick={nextPage}>Next Page</button>
        </div>


    )

}

export default Support;