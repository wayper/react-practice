import React, { Component } from 'react';

export default class ItemStatusFilter extends Component {
    render () {
        const { onBtnAll, onBtnActive, onBtnDone, filters, allTasks, activeTasks } = this.props;
        const { all, active, done } = filters;
        return (
            <div className="btn-group ml-2" role="group" aria-label="Basic example">
                <button type="button" 
                    className={`btn btn-outline-dark px-1 ${all ? 'font-weight-bold' : ''}`}
                    onClick={ onBtnAll }
                    >All <span className="badge badge-secondary">{allTasks}</span>
                </button>
                <button type="button" 
                    className={`btn btn-outline-dark px-1 ${active ? 'font-weight-bold' : ''}`}
                    onClick={ onBtnActive }
                    >Active <span className="badge badge-secondary">{activeTasks}</span>
                </button>
                <button type="button" 
                    className={`btn btn-outline-dark px-1 ${done ? 'font-weight-bold' : ''}`}
                    onClick={ onBtnDone }
                    >Done <span className="badge badge-secondary">{allTasks - activeTasks}</span>
                </button>
            </div>);
    }
}