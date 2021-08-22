import React from 'react'
import {useHistory } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { useState } from 'react';

function Comments(){

    let savePage = useHistory()

    //Set up dispatch
    const dispatch = useDispatch();

    //Set up useState
    const [comments, setComments] = useState('');

    function nextPage(){
        //The payload is being dispatch to the index.js 
        dispatch({
            type: "COMMENTS_INFO",
            payload: comments

        })
        //make sure history went to the next page 
        savePage.push('/review')
    }

    return(
        <div>
            <h1>Comment</h1>
            <h2>Leave any comments below</h2>
            <input 
            type="text" 
            value={comments} 
            placeholder="Leave a comment here"
            onChange={(event) => setComments(event.target.value) } />
            <button onClick={nextPage}>Submit</button>
            

        </div>


    )

}

export default Comments;

