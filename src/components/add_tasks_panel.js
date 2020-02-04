import React, { Component } from 'react';

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
            <form onSubmit={ this.onSubmitForm }>
                    <input
                        type="text"
                        className={ `form-control ${ inputValid ? '' : 'is-invalid' }` }
                        onChange={ this.onLabelChange }
                        placeholder="+ new task"
                        value={ inputValue }
                        maxLength={50}
                    />
                    <button
                        className="btn btn-outline-secondary"
                        type="submit"
                    >Add</button>
            </form>
        );
    }
};