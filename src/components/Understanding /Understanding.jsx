import React from 'react'
import { useHistory } from 'react-router-dom'

function Understanding() {

    let savePage = useHistory()
    function nextPage() {

        history.push('/understanding')
    }

    return (
        <div>
            <h1>Understanding </h1>
            <button onClick= {nextPage}></button>
        </div>

    )

}

export default Understanding;