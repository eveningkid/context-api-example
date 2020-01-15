import React from 'react';
import { Link } from 'react-router-dom';

const ProverbsPage = () => {
    // change this to something else, coming from the context
    const proverbs = [];

    return (
        <>
            <Link to="/settings">Settings</Link>
            <h1>Proverbs</h1>
            <ul>
                {proverbs.map(res => <li key={res}>{res}</li>)}
            </ul>
        </>
    );
};

export default ProverbsPage;
