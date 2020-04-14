import React from 'react';
import './Menu.css';

export default props => (
    <div className="menu">
        <ul>
            {props.children}
        </ul>
    </div>
);