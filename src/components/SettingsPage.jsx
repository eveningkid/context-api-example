import React from 'react';
import { Link } from 'react-router-dom';

const SettingsPage = () => {
    return (
        <>
            <Link to="/">Back</Link>
            <h1>Settings</h1>
            <select
                name="language"
            >
                <option value="en">en</option>
                <option value="pt">pt</option>
            </select>
        </>
    );
};

export default SettingsPage;
