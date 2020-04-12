import React, { Fragment } from 'react';
import './Aside.css';

import MenuHeader from './MenuHeader';
import MenuBody from './MenuBody';

export default props => (
    <Fragment>
        <aside>
            <MenuHeader />
            <MenuBody />
        </aside>
    </Fragment>
);