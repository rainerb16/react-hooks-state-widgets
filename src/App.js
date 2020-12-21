import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';

// const items = [
//     {
//         title: 'What is React?',
//         content: 'React is a front end javascript framework'
//     },
//     {
//         title: 'Why user React?',
//         content: 'React is a favorite JS library among engineers'
//     },
//     {
//         title: 'How do you use React?',
//         content: 'You use React by creating components'
//     }
// ]

const options =[
    {
        label: 'Color Red',
        value: 'red'
    },
    {
        label: 'Color Green',
        value: 'green'
    },
    {
        label: 'Color Blue',
        value: 'blue'
    }
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Drowdown</button>
            {showDropdown ?
                <Dropdown selected= {selected} options={options} onSelectedChange={setSelected}/>
            : null
            }
        </div>
    );
};