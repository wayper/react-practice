import React from 'react';

import './theme_change.css';

const ThemeChangePanel = () => {
    return (
    <div className="btn-group-vertical theme-change-panel" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-light">Light</button>
        <button type="button" className="btn btn-secondary">Dark</button>
        <button type="button" className="btn btn-secondary">Color</button>
        <button type="button" className="btn btn-secondary">Theme</button>
    </div>
    );
}

export default ThemeChangePanel;