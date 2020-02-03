import React, { Component } from 'react';

export default class ItemStatusFilter extends Component {
    render () {
        const { allTasks, activeTasks } = this.props;
        return (
            <div className="btn-group ml-2" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-outline-dark font-weight-bold px-1"
                    >All <span className="badge badge-secondary">{allTasks}</span>
                </button>
                <button type="button" className="btn btn-outline-dark px-1"
                    >Active <span className="badge badge-secondary">{activeTasks}</span>
                </button>
                <button type="button" className="btn btn-outline-dark px-1"
                    >Done <span className="badge badge-secondary">{allTasks - activeTasks}</span>
                </button>
            </div>);
    }
}