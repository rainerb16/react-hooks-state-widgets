import React from 'react';

const Main = () => {
    return(
        <div className='item'>
            <h3>Welcome to React Widgets</h3>
            <p>The general idea is to practice using React Hooks, useState, useEffect and useRef. There are three widgets coded to show this.</p>
            <br />
            <p>These widgets are: </p>
            <ul>
                <li>Accordion Widget: showing accordion style sections</li>
                <li>Search / List Widget: showing a search with Wikipedia's API</li>
                <li>Dropdown Widget: showing a dropdown with selections</li>
            </ul>
            <p>All of these widgets demonstrate the use of React Hooks, useState, useEffect and useRef.</p>
        </div>
    );
};

export default Main;