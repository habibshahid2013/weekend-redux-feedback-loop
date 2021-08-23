import react from 'react';
import { useHistory } from 'react-router-dom';

function Success() {
    let history = useHistory();

    const nextPage = () => {
        history.push('/');
    }
    return (
        <div>
            <h1>Thank you for taking the survey</h1>
            <br />
            <h3>Please leave feedback below</h3>
            <button variant="contained" color="primary" onClick={nextPage}>Leave More Feedback</button>
        </div>
    )
}

export default Success;