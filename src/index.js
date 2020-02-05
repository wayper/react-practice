import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import AppHeader from './components/app_header';
import SearchPanel from './components/search_panel';
import Todolist from './components/todo_list/todo_list';
import AddTasksPanel from './components/add_tasks_panel/add_tasks_panel';
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
        filterSearch: '',
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
                todoData: this.changeStatusTasks(todoData, id, 'done')
            };
        })
    };

    onBtnImportantTask = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.changeStatusTasks(todoData, id, 'important')
            };
        })
    }

    // Filters (all, active, done)
    changeStatusFilter = (obj, propName) => {
        const newObj = { ...obj };
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
                filters: this.changeStatusFilter(filters, 'all')
            };
        })
    }

    onBtnActive = () => {
        this.setState(({ filters }) => {
            return {
                filters: this.changeStatusFilter(filters, 'active')
            };
        })
    }

    onBtnDone = () => {
        this.setState(({ filters }) => {
            return {
                filters: this.changeStatusFilter(filters, 'done')
            };
        })
    }

    // Filter SEARCH PANEL
    onSearchChange = (textSearch) => {
        this.setState({
            filterSearch: textSearch
        });
    }

    filterSearchDo(arrTasks, searhText) {
        if (searhText === 0) {
            return arrTasks;
        }
        return arrTasks.filter((item) => {
            return item.textTask.toLowerCase().indexOf(searhText.toLowerCase()) > -1;
        });
    }

    // Change Theme

    changeTheme = (obj, propName) => {
        const newObj = { ...obj };
        for (let key in newObj) {
            if (key === propName) {
                newObj[key] = true;
            } else {
                newObj[key] = false;
            }
        }
        return newObj
    };

    onBtnLight = () => {
        this.setState(({ theme }) => {
            return {
                theme: this.changeTheme(theme, 'light')
            };
        })
    }

    onBtnDark = () => {
        this.setState(({ theme }) => {
            return {
                theme: this.changeTheme(theme, 'dark')
            };
        })
    }

    onBtnColor = () => {
        this.setState(({ theme }) => {
            return {
                theme: this.changeTheme(theme, 'color')
            };
        })
    }

    render() {

        const { todoData, filters, filterSearch } = this.state;
        const visibleItems = this.filterSearchDo(todoData, filterSearch);
        const allTasks = todoData.length;
        const activeTasks = todoData.filter((el) => !el.done).length;
        const { light, dark } = this.state.theme;

        return (
            <Fragment>
                <div className={`d-flex justify-content-center ${light ? 'bg-light' : dark ? 'bg-dark' : 'bg-warning'}`}>
                    <ThemeChangePanel
                        onBtnLight={this.onBtnLight}
                        onBtnDark={this.onBtnDark}
                        onBtnColor={this.onBtnColor} />
                    <div className="d-flex flex-column align-items-stretch col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5">
                        <div className={`text-center ${light ? 'text-dark' : dark ? 'text-light' : 'text-success'}`} >
                            <AppHeader />
                        </div>
                        <div className="d-inline-flex flex-column flex-md-row flex-sm-column justify-content-between flex-row">
                            <div className="flex-grow-1 mb-2">
                                <SearchPanel
                                    onSearchChange={this.onSearchChange} />
                            </div>
                            <div className="">
                                <ItemStatusFilter
                                    onBtnAll={this.onBtnAll}
                                    onBtnActive={this.onBtnActive}
                                    onBtnDone={this.onBtnDone}
                                    filters={filters}
                                    allTasks={allTasks}
                                    activeTasks={activeTasks} />
                            </div>
                        </div>
                        <div> {/*className="d-flex flex-column flex-md-row flex-sm-column justify-content-between flex-row"*/}
                            <AddTasksPanel
                                addHandleTask={this.addHandleTask} />
                            <Todolist
                                todoData={visibleItems}
                                onDelete={this.onBtnDeleteTask}
                                onCompleted={this.onBtnCompletedTask}
                                onImportant={this.onBtnImportantTask}
                                filters={filters} />

                        </div>
                    </div>
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
