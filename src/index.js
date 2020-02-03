import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import AppHeader from './components/app_header';
import SearchPanel from './components/search_panel';
import Todolist from './components/todo_list';
import ItemStatusFilter from './components/item-status-filter';
import AddTasksPanel from './components/add_tasks_panel';

import './index.css';


class App extends Component {

    state = {
        todoData: [
            {
                id: 1,
                textTask: 'Drink Coffee',
                important: false,
                done: false,
            },
            {
                id: 2,
                textTask: 'Build React App',
                important: false,
                done: false,
            },
            {
                id: 3,
                textTask: 'Learn Redux',
                important: false,
                done: true,
            },
        ],
    };

    onBtnDeleteTask = (id) => {
        this.setState(({ todoData }) => {
            const newTodoData = todoData.filter((el) => el.id !== id);
            return {
                todoData: newTodoData
            };
        })
    };

    addHandleTask = (text) => {
        // 1. Generate a pseudo-random number;
        // 2. Return the string representation of the number in hexadecimal notation;
        // 3. First we cut off "0." and extract the "n" characters
        const idGenerated = Math.random().toString(16).slice(2, 15);

        const newTask = {
            textTask: text,
            id: idGenerated,
        }

        this.setState(({ todoData }) => {
            const newTodoData = [...todoData, newTask];
            return {
                todoData: newTodoData
            }
        })


        console.log('Add task!', text);
    }

    onBtnCompletedTask = (id) => {
        this.setState(({ todoData }) => {
            const index = todoData.findIndex((el) => el.id === id);
            const newTodoData = [...todoData];
            newTodoData[index].done = !newTodoData[index].done;
            return {
                todoData: newTodoData
            };
        }
        )
    }

    onBtnImportantTask = (id) => {
        this.setState(({ todoData }) => {
            const index = todoData.findIndex((el) => el.id === id);
            const newTodoData = [...todoData];
            newTodoData[index].important = !newTodoData[index].important;
            return {
                todoData: newTodoData
            };
        }
        )
    }


    render() {

        const allTasks = this.state.todoData.length;
        const activeTasks = this.state.todoData.filter((el) => !el.done).length;

        return (
            <div className="container-fluid mx-auto text-center py-2">
                <AppHeader />
                <div className="container">
                    <div className="d-inline-flex flex-column flex-md-row flex-sm-column justify-content-between flex-row">
                        <div className="flex-grow-1 mb-2">
                            <SearchPanel />
                        </div>
                        <div className="">
                            <ItemStatusFilter
                                allTasks={allTasks} 
                                activeTasks={activeTasks} />
                        </div>
                    </div>
                </div>
                <Todolist
                    todoData={this.state.todoData}
                    onDelete={this.onBtnDeleteTask}
                    onCompleted={this.onBtnCompletedTask}
                    onImportant={this.onBtnImportantTask} />
                <AddTasksPanel
                    addHandleTask={this.addHandleTask} />
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
