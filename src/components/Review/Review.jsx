import React from 'react'
import { useHistory } from 'react-router-dom'

function Review() {

    let savePage = useHistory()
    function nextPage() {

        history.push('/review')
    }


    return (
        <div>
            <h1>Review</h1>
            <button onClick={nextPage}></button>
        </div>


    )

}

export default Review;