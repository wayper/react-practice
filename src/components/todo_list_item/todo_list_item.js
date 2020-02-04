import React from 'react';

const TodoListItem = ({ textTask, onDelete, onCompleted, onImportant, done, important }) => {

    return (
        <span className="d-flex justify-content-between">
            <button onClick={onCompleted} type="button" className="btn btn-outline-secondary align-self-center p-1"><i className="fa fa-check" aria-hidden="true"></i></button>
            <span
                className={`align-self-center flex-grow-1 text-left mx-2
                                ${important ? 'font-weight-bold' : ''}
                                ${done ? 'text-muted' : ''}`
                }>
                {done ? <s>{textTask}</s> : textTask}
            </span>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button onClick={onDelete} type="button" className="btn btn-outline-secondary align-self-center p-1 px-2 mr-1"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                <button onClick={onImportant} type="button" className="btn btn-outline-secondary align-self-center p-1 px-2"><i className="fa fa-exclamation-triangle" aria-hidden="true"></i></button>
            </div>
        </span>
    );
}

export default TodoListItem;
