import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import AppHeader from './components/app_header';
import SearchPanel from './components/search_panel';
import Todolist from './components/todo_list/todo_list';
import AddTasksPanel from './components/add_tasks_panel';
import ItemStatusFilter from './components/item-status-filter';
import ThemeChangePanel from './components/theme_change/tneme_change';

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
        theme: {
            light: true,
            dark: false,
            color: false,
        },
        filters: {
            all: true,
            active: false,
            done: false,
        },
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
    };



    // Change the status of tasks (important / regular, completed / unfulfilled)

    changeStatusTasks = (arr, id, propName) => {
        const index = arr.findIndex((el) => el.id === id);
        const newArr = [...arr];
        newArr[index][propName] = !newArr[index][propName];

        return newArr
    };

    onBtnCompletedTask = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.changeStatusTasks( todoData, id, 'done' )
            };
        })
    };

    onBtnImportantTask = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.changeStatusTasks( todoData, id, 'important' )
            };
        })
    }

    // Filters

    changeStatusFilter = ( obj, propName ) => {
        const newObj = {...obj};
        for (let key in newObj) {
            if (key === propName) {
                newObj[key] = true;
             } else {
                 newObj[key] = false;
             }
          }
        return newObj
    };

    onBtnAll = () => {
        this.setState(({ filters }) => {
            return {
                filters: this.changeStatusFilter( filters, 'all' )
            };
        })
    }

    onBtnActive = () => {
        this.setState(({ filters }) => {
            return {
                filters: this.changeStatusFilter( filters, 'active' )
            };
        })
    }

    onBtnDone = () => {
        this.setState(({ filters }) => {
            return {
                filters: this.changeStatusFilter( filters, 'done' )
            };
        })
    }

    render() {

        const { todoData, filters } = this.state;
        const allTasks = todoData.length;
        const activeTasks = todoData.filter((el) => !el.done).length;

        return (
            <Fragment>
                <ThemeChangePanel />
                <div className="container-fluid mx-auto text-center py-2">
                    <AppHeader />
                    <div className="container">
                        <div className="d-inline-flex flex-column flex-md-row flex-sm-column justify-content-between flex-row">
                            <div className="flex-grow-1 mb-2">
                                <SearchPanel />
                            </div>
                            <div className="">
                                <ItemStatusFilter
                                    onBtnAll={ this.onBtnAll }
                                    onBtnActive={ this.onBtnActive }
                                    onBtnDone={ this.onBtnDone }
                                    filters={ filters }
                                    allTasks={ allTasks }
                                    activeTasks={ activeTasks } />
                            </div>
                        </div>
                    </div>
                    <Todolist
                        todoData={todoData}
                        onDelete={this.onBtnDeleteTask}
                        onCompleted={this.onBtnCompletedTask}
                        onImportant={this.onBtnImportantTask}
                        filters={ filters } />
                    <AddTasksPanel
                        addHandleTask={this.addHandleTask} />
                </div>
            </Fragment>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
