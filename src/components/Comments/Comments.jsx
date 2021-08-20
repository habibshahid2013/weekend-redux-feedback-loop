import React from 'react'
import { useDispatch,useHistory } from 'react-router-dom'

function Comments(){

    let savePage = useHistory()

    //Set up dispatch
    const dispatch = useDispatch();

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

