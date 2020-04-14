import React from 'react';
import './Menu.css';

export default props => (
    <nav className="menu">
        <ul>
            {props.children}
        </ul>
    </nav>
);