import React, { Component } from 'react';

export default class SearchPanel extends Component {

    state = {
        searchText: '',
    }

    onSearchChange = (e) => {
        const searchText = e.target.value;
        this.setState({ searchText });
        this.props.onSearchChange(searchText);
    }

    render() {
        return <input 
            type="text"
            className="form-control mr-2" 
            placeholder="search"
            value={ this.state.searchText }
            onChange={ this.onSearchChange } />
    };
};

;