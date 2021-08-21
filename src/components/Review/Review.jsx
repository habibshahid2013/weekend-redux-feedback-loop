import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import axios from 'axios';



function Review(onSubmit) {

    const comments = useSelector((store) => store.commentsReducer); // selects from store state
    const feeling = useSelector((store) => store.feelingReducer); // selects from store state
    const support = useSelector((store) => store.supportReducer); // selects from store state
    const understanding = useSelector((store) => store.understandingReducer); // selects from store state

    let savePage = useHistory()

    //Set up dispatch
    const dispatch = useDispatch();

    function onSubmitButton() {
        console.log(onSubmit);

        axios.post({
            method: "POST",
            url:'/survey',
            data: {
                comments,
                feeling,
                support,
                understanding
            },
        }).then((response) => {
            console.log("response from the DB", response);
        }).catch((error) => {
            console.log("error from the POST /survey", error);
        })
        savePage.push('/')
    }
    return (
        <div>
            <h1>Review</h1>
                <p>Feeling: {feeling}</p>
                <p>Understanding:{understanding}</p>
                <p>Support: {support}</p>
                <p>Comments: {comments}</p>
            <button onClick={onSubmitButton}>Submit</button>
        </div>


    )

}

export default Review;