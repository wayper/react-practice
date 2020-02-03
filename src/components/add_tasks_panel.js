import React, { Component } from 'react';

export default class AddTasksPanel extends Component {

    state = {
        inputValue: 'tra-ta-ta',
    }

    render() {
        const { addHandleTask } = this.props;
        const { inputValue } = this.state;
        console.log(inputValue);

        return (
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Recipient's username" 
                    aria-label="Recipient's username" 
                    aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button 
                        className="btn btn-outline-secondary" 
                        type="button"
                        onClick={() => addHandleTask(inputValue)}
                        >Add task</button>
                </div>
            </div>
        );
    }
};