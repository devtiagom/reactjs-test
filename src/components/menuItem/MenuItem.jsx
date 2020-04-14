import React from 'react';
import { Link } from 'react-router-dom';
import './MenuItem.css';

export default props => (
    <div>
        <li>
            <Link className="menuItem" to={props.path}>
                <i className={`fa fa-${props.icon} fa-2x`}></i>
                <span>{props.title}</span>
            </Link>            
        </li>
    </div>
);