import React, { useState } from 'react';
import Main from './components/Main';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why user React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

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

    return (
        <div>
            <Header />
            <Route path='/'>
                <Main />
            </Route>
            <Route path='/accordion'>
                <Accordion items={items} />
            </Route>
            <Route path='/list'>
                <Search />
            </Route>
            <Route path='/dropdown'>
                <Dropdown options={options} selected={selected} onSelectedChange={setSelected}/>
            </Route>
        </div>
    );
};