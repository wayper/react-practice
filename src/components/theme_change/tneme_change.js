import React, { Component } from 'react';

import './theme_change.css';

class ThemeChangePanel extends Component {
    render() {
        const { onBtnLight, onBtnDark, onBtnColor } = this.props;
        return (
            <div className="btn-group-vertical theme-change-panel" role="group" aria-label="Basic example">
                <button onClick={onBtnLight} type="button" className="btn btn-light">Light</button>
                <button onClick={onBtnDark} type="button" className="btn btn-dark">Dark</button>
                <button onClick={onBtnColor} type="button" className="btn btn-warning text-success">Color</button>
                <button type="button" className="btn btn-secondary">Theme</button>
            </div>
            );
    }
}

export default ThemeChangePanel;