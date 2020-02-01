import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import AppHeader from './components/app_header';
import SearchPanel from './components/search_panel';
import Todolist from './components/todo_list';
import ItemStatusFilter from './components/item-status-filter';

import './index.css';

const App = () => {

    // 1. Generate a pseudo-random number;
    // 2. Return the string representation of the number in hexadecimal notation;
    // 3. First we cut off "0." and extract the "n" characters
    // let keyGenerated = Math.random().toString(16).slice(2, 15);

    const todoData = [
        { textTask: 'Drink Coffee', id: 1 },
        { textTask: 'Build React App', id: 2 },
        { textTask: 'Learn Redux', id: 3 }
    ];

    return (
        <div className="container-fluid mx-auto text-center py-2">
            <AppHeader />
            <div className="container">
                <div className="d-inline-flex flex-column flex-md-row flex-sm-column justify-content-between flex-row">
                    <div className="flex-grow-1 mb-2">
                        <SearchPanel />
                    </div>
                    <div className="">
                        <ItemStatusFilter />
                    </div>
                </div>
            </div>
            <Todolist todoData={todoData} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
