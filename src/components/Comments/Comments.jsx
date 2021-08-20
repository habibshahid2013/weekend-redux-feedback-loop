import React from 'react'
import { useHistory } from 'react-router-dom'

function Comments(){

    let savePage = useHistory()

    function nextPage(){

        history.push('/comments')
    }

    return(
        <div>
            <h1>Comment</h1>
            <button Onclick={nextPage}></button>

        </div>


    )

}

export default Comments;

