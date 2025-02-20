import React from 'react'

function NotFound() {
  return (
    <div>NotFound</div>
  )
}

export default NotFound



import React from 'react';
import { useHistory } from 'react-router-dom';
import './NotFound.css'; // Optional: Import your CSS file for styling.

const NotFound: React.FC = () => {
    const history = useHistory();

    const handleBackHome = () => {
        history.push('/');
    };

    return (
        <div className="not-found-container">
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <button onClick={handleBackHome} className="back-home-button">
                Back to Home
            </button>
        </div>
    );
};

export default NotFound;