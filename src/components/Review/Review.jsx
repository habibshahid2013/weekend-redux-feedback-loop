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
                <p>Feeling:</p>
                <p>Understanding:</p>
                <p>Support:</p>
                <p>Comments:</p>
            <button onClick={''}>Submit</button>
        </div>


    )

}

export default Review;