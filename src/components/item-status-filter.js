import React, { Component } from 'react';

export default class ItemStatusFilter extends Component {
    render () {
        return (
            <div className="btn-group ml-2" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-outline-dark font-weight-bold">All</button>
                <button type="button" className="btn btn-outline-dark">Active</button>
                <button type="button" className="btn btn-outline-dark">Done</button>
            </div>);
    }
}
