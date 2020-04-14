import React from 'react';
import { Link } from 'react-router-dom';
import './MenuItem.css';

import If from '../../common/If';

export default props => (
    <div>
        <li>
            <Link className="menuItem" to={props.path}>
                <i className={`fa fa-${props.icon} fa-2x`}></i>
                <If displayIf={true}>{props.title}</If>
            </Link>            
        </li>
    </div>
);