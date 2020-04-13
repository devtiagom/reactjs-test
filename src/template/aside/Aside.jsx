import React from 'react';
import './Aside.css';

import MenuHeader from './MenuHeader';
import MenuBody from './MenuBody';

export default props => (
    <aside>
        <MenuHeader />
        <MenuBody />
    </aside>
);