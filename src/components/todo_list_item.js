import React, { Component } from 'react';

class TodoListItem extends Component {

    state = {
            completed: false,
            important: false,
        };

    onItemClick = () => {
        this.setState(({ completed }) => {
            return {
                completed: !completed
            };
        });
    }

    onBtnImportant = () => {
        this.setState(({ important }) => {
            return {
                important: !important
            };
        });
    }

    render() {
        const { textTask } = this.props;
        const { completed, important } = this.state;
    
        return (
            <span className="d-flex justify-content-between">
                <button onClick={ this.onItemClick } type="button" className="btn btn-outline-secondary align-self-center p-1"><i className="fa fa-check" aria-hidden="true"></i></button>
                <span 
                    className={`align-self-center flex-grow-1 text-left mx-2
                                ${important ? 'font-weight-bold' : ''}
                                ${completed ? 'text-muted' : ''}`
                                }>
                    {completed ? <s>{textTask}</s> : textTask}
                </span>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button onClick={this.props.onDelete} type="button" className="btn btn-outline-secondary align-self-center p-1 px-2 mr-1"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                    <button onClick={this.onBtnImportant} type="button" className="btn btn-outline-secondary align-self-center p-1 px-2"><i className="fa fa-exclamation-triangle" aria-hidden="true"></i></button>
                </div>
            </span>
        );
    }

};

export default TodoListItem;
