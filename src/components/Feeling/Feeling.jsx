import React from 'react'
import { useDispatch, useHistory } from 'react-router-dom'

function Feeling() {

    let savePage = useHistory()

    function nextPage() {

        history.push('/feeling')
    }


    return (
        <div>
            <h1>Feeling</h1>
            <h2>Are you feeling ok today? </h2>
            <input type="number"/>
            <button onClick={nextPage}>Next</button>
        </div>


    )

}

export default Feeeling;