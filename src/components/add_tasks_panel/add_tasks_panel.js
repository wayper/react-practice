import React, { Component } from 'react';

import './add_tasks_panel.css';

export default class AddTasksPanel extends Component {

    state = {
        inputValue: '',
        inputValid: true,
    };

    onLabelChange = (e) => {
        this.setState({
            inputValue: e.target.value
        });
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.inputValue.length > 3) {
            this.props.addHandleTask(this.state.inputValue);
            this.setState({
                inputValue: '',
                inputValid: true, 
            });
        } else {
            this.setState({
                inputValid: false, 
            });
        }
    };

    render() {
        const { inputValue, inputValid } = this.state;

        return (
            <form className="d-flex add-tasks-panel mt-2 mb-4" onSubmit={ this.onSubmitForm }>
                    <input
                        type="text"
                        className={ `form-control mr-2 ${ inputValid ? '' : 'is-invalid' }` }
                        onChange={ this.onLabelChange }
                        placeholder="+ new task"
                        value={ inputValue }
                        maxLength={50}
                    />
                    <div className={ `valid-feedback ${ inputValid ? '' : 'valid' }` }>Must be more than 3 characters!у</div>
                    <button
                        className="btn btn-outline-secondary"
                        type="submit"
                    >Add</button>
            </form>
        );
    }
};