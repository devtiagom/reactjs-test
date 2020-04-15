import React from 'react';
import { Link } from 'react-router-dom';
import './MenuItem.css';

import Show from '../../common/Show';

export default props => (
    <div>
        <li>
            <Link className="menuItem" to={props.path}>
                <i className={`fa fa-${props.icon} fa-2x`}></i>
                <Show if={props.menuVisibility==='large'}>{props.title}</Show>
            </Link>            
        </li>
    </div>
);