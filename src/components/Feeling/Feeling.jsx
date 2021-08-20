import React from 'react'
import { useHistory } from 'react-router-dom'

function Feeling() {

    let savePage = useHistory()

    function nextPage() {

        history.push('/feeling')
    }


    return (
        <div>
            <h1>Feeling</h1>
            <button onClick={nextPage}></button>
        </div>


    )

}

export default Feeeling;