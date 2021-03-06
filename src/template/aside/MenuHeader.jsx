import React from 'react';
import './MenuHeader.css';

import Show from '../../common/Show';

export default props => (
    <div className="menuHeader">
        {/* <img src="assets/LogoIcon3.png" alt="logo-icon" width="50" /> */}
        <i className="fa fa-share-alt fa-2x"></i>
        <Show if={props.menuVisibility==='large'}><img src="assets/Logo.png" alt="logo-icon" width="180" /></Show>
    </div>
);