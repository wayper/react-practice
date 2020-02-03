import React from 'react';

import TodoListItem from './todo_list_item';

const Todolist = ({ todoData, onDelete, onCompleted, onImportant }) => {

    const elements = todoData.map(({ id, ...otherProps }) => {
        return (
            <li key={id}  className="list-group-item list-group-item-action py-1 px-1 shadow-sm mb-1 rounded">
                <TodoListItem 
                    {...otherProps}
                    onDelete={ () => onDelete(id) }
                    onCompleted={ () => onCompleted(id) }
                    onImportant={ () => onImportant(id) } />
            </li>);
    });

    return (
        <div className="d-flex justify-content-center my-3">
            <ul className="col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5 list-group">
                {elements}
            </ul>
        </div>
    );
};

export default Todolist;