import React from 'react'
import { useHistory } from 'react-router-dom'

function Support() {

    let savePage = useHistory()

    function nextPage() {

        history.push('/support')
    }


    return (
        <div>
            <h1>Support</h1>
            <h2></h2>
            <button onClick= {nextPage}></button>
        </div>


    )

}

export default Support;