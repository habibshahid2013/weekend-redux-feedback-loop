import react from 'react';
import { useHistory } from 'react-router-dom';

function Success() {
    let history = useHistory();

    const nextPage = () => {
        history.push('/');
    }
    return (
        <div>
            <h1>Congratulations, you made it!</h1>
            <br />
            <h3>Care to leave some more feedback?</h3>
            <button>Leave Feedback</button>
        </div>
    )
}

export default Success;